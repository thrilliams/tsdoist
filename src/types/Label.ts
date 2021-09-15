import { z } from 'zod';

export const Label = z.object({
    id: z.number().int(),
    name: z.string(),
    color: z.number().int().min(30).max(49),
    order: z.number().int(),
    favorite: z.boolean()
}).strict();

export type Label = z.infer<typeof Label>;

export const LabelCreateOptions = z.object({
    name: z.string(),
    order: z.number().int().optional(),
    color: z.number().int().min(30).max(49).optional(),
    favorite: z.boolean().optional()
}).strict();

export type LabelCreateOptions = z.input<typeof LabelCreateOptions>;

export const LabelUpdateOptions = z.object({
    name: z.string().optional(),
    order: z.number().int().optional(),
    color: z.number().int().min(30).max(49).optional(),
    favorite: z.boolean().optional()
}).strict();

export type LabelUpdateOptions = z.input<typeof LabelUpdateOptions>;