import { z } from 'zod';

export const Due = z.object({
    string: z.string(),
    date: z.string().transform(date => new Date(date)),
    recurring: z.boolean(),
    datetime: z.string().transform(date => new Date(date)).optional(),
    timezone: z.string().optional()
}).strict();

export type Due = z.infer<typeof Due>;

export const Task = z.object({
    id: z.number().int(),
    project_id: z.number().int(),
    section_id: z.number().int(),
    content: z.string(),
    description: z.string(),
    completed: z.boolean(),
    label_ids: z.number().int().array(),
    parent_id: z.number().int().optional(),
    parent: z.number().int().optional(),
    order: z.number().int(),
    priority: z.number().int().min(1).max(4),
    due: Due.optional(),
    url: z.string().url(),
    comment_count: z.number().int(),
    assignee: z.number().int().optional(),
    assigner: z.number().int(),
    creator: z.number().int(),
    created: z.string().transform(date => new Date(date))
}).strict();

export type Task = z.infer<typeof Task>;

export const TaskGetOptions = z.object({
    project_id: z.number().int().optional(),
    section_id: z.number().int().optional(),
    label_id: z.number().int().optional(),
    filter: z.string().optional(),
    lang: z.string().optional(),
    ids: z.number().int().array().optional()
}).strict().optional();

export type TaskGetOptions = z.input<typeof TaskGetOptions>;

const BaseCreateOptions = z.object({
    content: z.string(),
    description: z.string().optional(),
    project_id: z.number().int().optional(),
    section_id: z.number().int().optional(),
    parent_id: z.number().int().optional(),
    parent: z.number().int().optional(),
    order: z.number().int().optional(),
    label_ids: z.number().int().array().optional(),
    priority: z.number().int().optional(),
    due_lang: z.string().optional(),
    assignee: z.number().int().optional()
});

export const TaskCreateOptions = z.union([
    BaseCreateOptions.extend({
        due_string: z.string().optional()
    }).strict(),
    BaseCreateOptions.extend({
        due_date: z.date().transform(date => date.toISOString().split('T')[0]).optional()
    }).strict(),
    BaseCreateOptions.extend({
        due_datetime: z.date().transform(date => date.toISOString()).optional()
    }).strict()
]);

export type TaskCreateOptions = z.input<typeof TaskCreateOptions>;

const BaseUpdateOptions = z.object({
    content: z.string().optional(),
    description: z.string().optional(),
    label_ids: z.number().int().array().optional(),
    priority: z.number().int().optional(),
    due_lang: z.string().optional(),
    assignee: z.number().int().optional()
});

export const TaskUpdateOptions = z.union([
    BaseUpdateOptions.extend({
        due_string: z.string().optional()
    }).strict(),
    BaseUpdateOptions.extend({
        due_date: z.date().transform(date => date.toISOString().split('T')[0]).optional()
    }).strict(),
    BaseUpdateOptions.extend({
        due_datetime: z.date().transform(date => date.toISOString()).optional()
    }).strict()
]).optional();

export type TaskUpdateOptions = z.input<typeof TaskUpdateOptions>;