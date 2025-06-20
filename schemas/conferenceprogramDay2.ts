import { defineField, defineType } from "sanity"

export default defineType({
  name: "conferenceprogramDay2",
  title: "Conference Program - Day 2",
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
      name: "sessionType",
      title: "Session Type",
      type: "string",
      options: {
        list: [
          { title: "Keynote", value: "keynote" },
          { title: "Panel Discussion", value: "panel" },
          { title: "Presentation", value: "presentation" },
          { title: "Workshop", value: "workshop" },
          { title: "Break", value: "break" },
          { title: "Networking", value: "networking" },
          { title: "Closing Ceremony", value: "closing" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "speakers",
      title: "Speakers/Presenters",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "speaker" }],
        },
      ],
    }),
    defineField({
      name: "venue",
      title: "Venue/Room",
      type: "string",
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
      startTime: "startTime",
      sessionType: "sessionType",
    },
    prepare(selection) {
      const { title, startTime, sessionType } = selection
      const time = new Date(startTime).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
      return {
        title,
        subtitle: `${time} - ${sessionType}`,
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
