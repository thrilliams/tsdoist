import { z } from 'zod';

export const Comment = z.object({
    id: z.number().int(),
    task_id: z.number().int().optional(),
    project_id: z.number().int().optional(),
    posted: z.string().transform(date => new Date(date)).optional(),
    content: z.string(),
    // attachment: z.null().optional()
}).strict();

export type Comment = z.infer<typeof Comment>;

export const CommentGetOptions = z.union([
    z.object({ task_id: z.number().int() }).strict(),
    z.object({ project_id: z.number().int() }).strict()
]);

export type CommentGetOptions = z.input<typeof CommentGetOptions>;

const BaseCreateOptions = z.object({
    content: z.string(),
    // attachment: z.null().optional()
});

export const CommentCreateOptions = z.union([
    BaseCreateOptions.extend({ task_id: z.number().int() }).strict(),
    BaseCreateOptions.extend({ project_id: z.number().int() }).strict()
]);

export type CommentCreateOptions = z.input<typeof CommentCreateOptions>;

export const CommentUpdateOptions = z.object({
    content: z.string()
}).strict();

export type CommentUpdateOptions = z.input<typeof CommentUpdateOptions>;