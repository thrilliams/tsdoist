import { RequestHandler } from './RequestHandler';
import { Comment, CommentCreateOptions, CommentGetOptions, CommentUpdateOptions } from './types/Comment';
import { Label, LabelCreateOptions } from './types/Label';
import { Collaborator, ProjectCreateOptions, Project, ProjectUpdateOptions } from './types/Project';
import { SectionGetOptions, Section, SectionCreateOptions, SectionUpdateOptions } from './types/Section';
import { Task, TaskCreateOptions, TaskGetOptions, TaskUpdateOptions } from './types/Task';

export class Todoist {
    private handler: RequestHandler;

    constructor(token: string, endpoint = 'https://api.todoist.com/rest/v1/') {
        this.handler = new RequestHandler(token, endpoint);
    }

    /**
     * Returns JSON-encoded array containing all user projects.
     * @returns {Promise<Project[]>}
     */
    async getProjects(): Promise<Project[]> {
        let json = await this.handler.get('projects');
        let projects = Project.array().parse(json);
        return projects;
    }

    /**
     * 
     * @param options {ProjectCreateOption}
     * @returns 
     */
    async createProject(options: ProjectCreateOptions): Promise<Project> {
        let json = await this.handler.post('projects', ProjectCreateOptions.parse(options));
        let project = Project.parse(json);
        return project;
    }

    async getProject(id: number): Promise<Project> {
        let json = await this.handler.get(`projects/${id}`);
        let project = Project.parse(json);
        return project;
    }

    async updateProject(id: number, options: ProjectUpdateOptions) {
        await this.handler.post(`projects/${id}`, ProjectUpdateOptions.parse(options), false);
    }

    async deleteProject(id: number) {
        await this.handler.delete(`projects/${id}`);
    }

    async getCollaborators(id: number): Promise<Collaborator[]> {
        let json = await this.handler.get(`projects/${id}/collaborators`);
        let collaborators = Collaborator.array().parse(json);
        return collaborators;
    }

    async getSections(options?: SectionGetOptions): Promise<Section[]> {
        let json = await this.handler.get(`sections`, SectionGetOptions.parse(options));
        let sections = Section.array().parse(json);
        return sections;
    }

    async createSection(options: SectionCreateOptions): Promise<Section> {
        let json = await this.handler.post(`sections`, SectionCreateOptions.parse(options));
        let section = Section.parse(json);
        return section;
    }

    async getSection(id: number): Promise<Section> {
        let json = await this.handler.get(`sections/${id}`);
        let project = Section.parse(json);
        return project;
    }

    async updateSection(id: number, options: SectionUpdateOptions) {
        await this.handler.post(`sections/${id}`, SectionUpdateOptions.parse(options), false);
    }

    async deleteSection(id: number) {
        await this.handler.delete(`sections/${id}`);
    }

    async getTasks(options?: TaskGetOptions): Promise<Task[]> {
        let json = await this.handler.get('tasks', TaskGetOptions.parse(options));
        let tasks = Task.array().parse(json);
        return tasks;
    }

    async createTask(options: TaskCreateOptions): Promise<Task> {
        let json = await this.handler.post('tasks', TaskCreateOptions.parse(options));
        let task = Task.parse(json);
        return task;
    }

    async getTask(id: number): Promise<Task> {
        let json = await this.handler.get(`tasks/${id}`);
        let task = Task.parse(json);
        return task;
    }

    async updateTask(id: number, options: TaskUpdateOptions) {
        await this.handler.post(`tasks/${id}`, TaskUpdateOptions.parse(options), false);
    }

    async closeTask(id: number) {
        await this.handler.post(`tasks/${id}/close`, undefined, false);
    }

    async reopenTask(id: number) {
        await this.handler.post(`tasks/${id}/reopen`, undefined, false);
    }

    async deleteTask(id: number) {
        await this.handler.delete(`tasks/${id}`);
    }

    async getComments(options: CommentGetOptions): Promise<Comment[]> {
        let json = await this.handler.get(`comments`, CommentGetOptions.parse(options));
        let comments = Comment.array().parse(json);
        return comments;
    }

    async createComment(options: CommentCreateOptions): Promise<Comment> {
        let json = await this.handler.post(`comments`, CommentCreateOptions.parse(options));
        let comment = Comment.parse(json);
        return comment;
    }

    async getComment(id: number): Promise<Comment> {
        let json = await this.handler.get(`comments/${id}`);
        let task = Comment.parse(json);
        return task;
    }

    async updateComment(id: number, options: CommentUpdateOptions) {
        await this.handler.post(`comments/${id}`, CommentUpdateOptions.parse(options), false);
    }

    async deleteComment(id: number) {
        await this.handler.delete(`comments/${id}`);
    }

    async getLabels(): Promise<Label[]> {
        let json = await this.handler.get('labels');
        let labels = Label.array().parse(json);
        return labels;
    }

    async createLabel(options: LabelCreateOptions): Promise<Label> {
        let json = await this.handler.post('labels', LabelCreateOptions.parse(options));
        let labels = Label.parse(json);
        return labels;
    }

    async getLabel(id: number): Promise<Label> {
        let json = await this.handler.get(`labels/${id}`);
        let labels = Label.parse(json);
        return labels;
    }

    async updateLabel(id: number, options: LabelCreateOptions) {
        await this.handler.post(`labels/${id}`, LabelCreateOptions.parse(options), false);
    }

    async deleteLabel(id: number) {
        await this.handler.delete(`labels/${id}`);
    }
}

module.exports.Todoist = Todoist;