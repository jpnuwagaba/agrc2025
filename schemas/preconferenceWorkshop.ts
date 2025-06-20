import { defineField, defineType } from "sanity"

export default defineType({
  name: "preconferenceWorkshop",
  title: "Pre-Conference Workshop",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Workshop Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facilitator",
      title: "Facilitator",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "facilitatorBio",
      title: "Facilitator Bio",
      type: "text",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration (in hours)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(8),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
    }),
    defineField({
      name: "maxParticipants",
      title: "Maximum Participants",
      type: "number",
    }),
    defineField({
      name: "prerequisites",
      title: "Prerequisites",
      type: "text",
    }),
    defineField({
      name: "materials",
      title: "Materials Provided",
      type: "array",
      of: [{ type: "string" }],
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
      title: "title",
      subtitle: "facilitator",
      date: "date",
    },
    prepare(selection) {
      const { title, subtitle, date } = selection
      return {
        title,
        subtitle: `${subtitle} - ${new Date(date).toLocaleDateString()}`,
      }
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
})
