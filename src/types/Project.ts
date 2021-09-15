import { z } from 'zod';

export const Project = z.object({
    id: z.number().int(),
    name: z.string(),
    color: z.number().int().min(30).max(49),
    parent_id: z.number().int().optional(),
    parent: z.number().int().optional(),
    order: z.number().int().optional(),
    comment_count: z.number().int(),
    shared: z.boolean(),
    favorite: z.boolean(),
    inbox_project: z.boolean().optional(),
    team_inbox: z.boolean().optional(),
    sync_id: z.number().int(),
    url: z.string().url()
}).strict();

export type Project = z.infer<typeof Project>;

export const Collaborator = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string().email()
}).strict();

export type Collaborator = z.infer<typeof Collaborator>;

export const ProjectCreateOptions = z.object({
    name: z.string(),
    parent_id: z.number().int().optional(),
    parent: z.number().int().optional(),
    color: z.number().int().min(30).max(49).optional(),
    favorite: z.boolean().optional()
}).strict();

export type ProjectCreateOptions = z.input<typeof ProjectCreateOptions>;

export const ProjectUpdateOptions = z.object({
    name: z.string().optional(),
    color: z.number().int().min(30).max(49).optional(),
    favorite: z.boolean().optional()
}).strict();

export type ProjectUpdateOptions = z.input<typeof ProjectUpdateOptions>;