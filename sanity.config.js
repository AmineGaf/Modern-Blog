import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "xdm6n7l4",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: "post",
        type: "document",
        title: "Post",
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
          },
          {
            name: "slug",
            type: "slug",
            title: "Slug",
          },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: "author",
            type: "reference",
            to: [{ type: "author" }],
          },
          {
            name: "categories",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
          },
          {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
          },
          {
            title:'Content Sections',
            name:'contentSections',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                  },
                  {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                  },
                ],
              },
            ]
          }
        ],
      },
      {
        name: "author",
        type: "document",
        title: "Author",
        fields: [
          {
            name: "name",
            type: "string",
            title: "Name",
          },
          {
            name: "slug",
            type: "slug",
            title: "Slug",
          },
          {
            name: "image",
            type: "image",
            title: "Image",
          },
        ],
      },
      {
        name: "category",
        type: "document",
        title: "Category",
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
          },
          {
            name: "slug",
            type: "slug",
            title: "Slug",
          },
        ],
      },
    ],
  },
});
