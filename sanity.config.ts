import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { visionTool } from "@sanity/vision"
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "default",
  title: "AGRC2025 EALAN Conference",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: "/admin",

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({ type: "speaker", S, context }),
            orderableDocumentListDeskItem({ type: "sponsor", S, context }),
            orderableDocumentListDeskItem({ type: "preconferenceWorkshop", S, context }),
            orderableDocumentListDeskItem({ type: "dialoguePanelist", S, context }),
            orderableDocumentListDeskItem({ type: "conferenceprogramDay1", S, context }),
            orderableDocumentListDeskItem({ type: "conferenceprogramDay2", S, context }),
            orderableDocumentListDeskItem({ type: "dialogueProgram", S, context }),
            ...S.documentTypeListItems().filter((listItem) => {
              const id = listItem.getId()
              return id
                ? ![
                    "speaker",
                    "sponsor",
                    "preconferenceWorkshop",
                    "dialoguePanelist",
                    "conferenceprogramDay1",
                    "conferenceprogramDay2",
                    "dialogueProgram",
                  ].includes(id)
                : false
            }),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Configure authentication and CORS
  auth: {
    mode: "replace",
    providers: [
      {
        name: "sanity",
        title: "Sanity",
        url: `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/auth/login/sanity`,
      },
    ],
  },

  // Use environment variables for configuration
  env: {
    development: {
      plugins: [structureTool(), visionTool()],
    },
  },
})
