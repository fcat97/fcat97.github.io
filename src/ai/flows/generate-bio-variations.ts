'use server';

/**
 * @fileOverview Generates variations of a professional biography based on provided keywords.
 *
 * - generateBioVariations - A function that generates biography variations.
 * - GenerateBioVariationsInput - The input type for the generateBioVariations function.
 * - GenerateBioVariationsOutput - The return type for the generateBioVariations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBioVariationsInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords describing skills and experience, comma separated.'),
});
export type GenerateBioVariationsInput = z.infer<typeof GenerateBioVariationsInputSchema>;

const GenerateBioVariationsOutputSchema = z.object({
  bioVariations: z
    .array(z.string())
    .describe('An array of biography variations generated from the keywords.'),
});
export type GenerateBioVariationsOutput = z.infer<typeof GenerateBioVariationsOutputSchema>;

export async function generateBioVariations(
  input: GenerateBioVariationsInput
): Promise<GenerateBioVariationsOutput> {
  return generateBioVariationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioVariationsPrompt',
  input: {schema: GenerateBioVariationsInputSchema},
  output: {schema: GenerateBioVariationsOutputSchema},
  prompt: `You are a professional biography writer. Generate 3 different biography variations based on the following keywords. Return them as a JSON array of strings.\n\nKeywords: {{{keywords}}}`,
  config: {
    safetySettings: [
      {category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH'},
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateBioVariationsFlow = ai.defineFlow(
  {
    name: 'generateBioVariationsFlow',
    inputSchema: GenerateBioVariationsInputSchema,
    outputSchema: GenerateBioVariationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
