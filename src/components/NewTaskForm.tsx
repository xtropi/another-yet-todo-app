import React from 'react';
import { Modal, Form, Input } from 'antd';
import { NewTaskValues } from '../types';

interface NewTaskFormType {
  visible: boolean;
  onCreate: (values: NewTaskValues) => void;
  onCancel: () => void;
}

const NewTaskForm: React.FC<NewTaskFormType> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new task"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={(event) => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please input Username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[          {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },{ required: true, message: 'Please input Email' }]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="text" label="Text" rules={[{ required: true, message: 'Please input task description' }]}>
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewTaskForm;
