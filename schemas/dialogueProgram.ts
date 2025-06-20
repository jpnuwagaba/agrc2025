import { defineField, defineType } from "sanity"

export default defineType({
  name: "dialogueProgram",
  title: "Dialogue Program",
  type: "document",
  fields: [
    defineField({
      name: "sessionTitle",
      title: "Session Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "sessionTitle",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "theme",
      title: "Dialogue Theme",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endTime",
      title: "End Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "moderator",
      title: "Moderator",
      type: "reference",
      to: [{ type: "dialoguePanelist" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "panelists",
      title: "Panelists",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "dialoguePanelist" }],
        },
      ],
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: "keyQuestions",
      title: "Key Discussion Questions",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "expectedOutcomes",
      title: "Expected Outcomes",
      type: "text",
    }),
    defineField({
      name: "targetAudience",
      title: "Target Audience",
      type: "string",
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
    }),
    defineField({
      name: "isPublic",
      title: "Public Dialogue",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "sessionTitle",
      theme: "theme",
      startTime: "startTime",
    },
    prepare(selection) {
      const { title, theme, startTime } = selection
      const time = new Date(startTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
      return {
        title,
        subtitle: `${theme} - ${time}`,
      }
    },
  },
  orderings: [
    {
      title: "Time Order",
      name: "timeAsc",
      by: [{ field: "startTime", direction: "asc" }],
    },
  ],
})
