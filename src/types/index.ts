export enum ActionTypes {
	TASK_CREATE = 'TASK_CREATE',
	TASK_EDIT = 'TASK_EDIT',
	TASKS_GET = 'TASKS_GET',
	USER_LOGIN = 'USER_LOGIN',
	USER_LOGOUT = 'USER_LOGOUT',
	ALERT_SHOW = 'ALERT_SHOW',
}

export type statusType = 0 | 1 | 10 | 11;

export enum StatusText {
	'Incomplete' = 0,
	'Incomplete, edited' = 1,
	'Done' = 10,
	'Done, edited' = 11,
}

export enum StatusColor {
	'blue' = 0,
	'cyan' = 1,
	'green' = 10,
	'lime' = 11,
}

export type alertsType = 'info' | 'success' | 'error' | 'warning' | undefined;

export enum DirectionTypes {
	asc = 'ascend',
	desc = 'descend',
}

export enum DirectionTypesShort {
	ascend = 'asc',
	descend = 'desc',
}

export interface TasksState {
	total_task_count: number;
	page: number;
	tasks: Task[];
}

export interface TaskAction {
	type: ActionTypes;
	payload?: any;
}

export interface Credentials {
	login: string;
	password: any;
}

export interface Task {
	key: number;
	id: number;
	username: string;
	email: string;
	text: string,
	status: number,
	image_path: string
}

export type TaskSort = {
	field: string;
	direction: string;
}

export interface NewTaskValues {
	username: string;
	email: string;
	text: string;
}