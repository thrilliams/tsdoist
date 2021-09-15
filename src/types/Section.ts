import { z } from 'zod';

export const Section = z.object({
    id: z.number().int(),
    project_id: z.number().int(),
    order: z.number().int(),
    name: z.string()
}).strict();

export type Section = z.infer<typeof Section>;

export const SectionGetOptions = z.object({
    project_id: z.number().int().optional()
}).strict().optional();

export type SectionGetOptions = z.input<typeof SectionGetOptions>;

export const SectionCreateOptions = z.object({
    name: z.string(),
    project_id: z.number().int(),
    order: z.number().int().optional()
}).strict();

export type SectionCreateOptions = z.input<typeof SectionCreateOptions>;

export const SectionUpdateOptions = z.object({
    name: z.string()
}).strict();

export type SectionUpdateOptions = z.input<typeof SectionUpdateOptions>;

