import { z } from 'zod';

export const CreateTaskSchema = z.object({
  title: z.string({ required_error: 'O título é obrigatório' }),
  completed: z.boolean().optional(),
});

export type CreateTaskDto = z.infer<typeof CreateTaskSchema>;
