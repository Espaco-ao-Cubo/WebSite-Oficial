import { defineConfig } from "tinacms";
import { translationFields } from "./i18nFields.js";

// ---------------------------------------------------------
// REUSABLE FIELDS: Keeps your config DRY (Don't Repeat Yourself)
// We define the team member fields once, with Dropdowns (options)!
// ---------------------------------------------------------
const teamMemberFields = [
  { type: "string", name: "name", label: "Full Name (First Last)", required: true },
  { type: "image", name: "image", label: "Profile Photo" },
  { type: "string", name: "role_en", label: "Role (EN)" },
  { type: "string", name: "role_pt", label: "Role (PT)" },
  { type: "string", name: "university", label: "University / Institution" },
  { type: "string", name: "course_en", label: "Course (EN)" },
  { type: "string", name: "course_pt", label: "Course (PT)" },
  {
    type: "string",
    name: "degree_en",
    label: "Degree (EN)",
    options: ["Undergraduate", "Master's", "PhD", "Professional", "Other", ""], // Dropdown!
  },
  {
    type: "string",
    name: "degree_pt",
    label: "Degree (PT)",
    options: ["Licenciatura", "Mestrado", "Doutoramento", "Profissional", "Outro", ""], // Dropdown!
  },
  {
    type: "string",
    name: "year",
    label: "Year",
    options: ["1", "2", "3", "4", "5", "Alumni", ""], // Dropdown!
  },
  { type: "string", name: "linkedin", label: "LinkedIn URL" },
];

const branch = "prod";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // ----------------------------------------------------
      // BLOG POSTS
      // ----------------------------------------------------
      {
        name: "post",
        label: "Blog Posts",
        path: "src/data/blog_posts",
        format: "md",
        match: { include: "**/*" },
        fields: [
          {
            type: "boolean",
            name: "draft",
            label: "Save as Draft",
            description: "If checked, this post will not appear on the live website.",
          },
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          {
            type: "string",
            name: "category",
            label: "Category",
            // Selectable values for categories!
            options: ["News", "Technical", "Events", "Updates", "Press"], 
          },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "author", label: "Author" },
          { type: "string", name: "authorRole", label: "Author Role" },
          { type: "image", name: "image", label: "Cover Image" },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "string", name: "excerpt", label: "Summary", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      // ----------------------------------------------------
      // PROJECTS
      // ----------------------------------------------------
      {
        name: "project",
        label: "Projects",
        path: "src/data/projects",
        format: "md",
        match: { include: "**/*" },
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "dateRange", label: "Date Range (display text)" },
          { type: "image", name: "image", label: "Cover Image" },
          { type: "string", name: "icon", label: "Icon (lucide name)" },
          { type: "boolean", name: "featured", label: "Featured" },
          { type: "boolean", name: "registrationOpen", label: "Registration Open" },
          { type: "string", name: "registrationLink", label: "Registration Link (URL)" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          // Support / partner logos shown at the bottom of the project page.
          // Replaces the old hand-written HTML logo grid so editors can manage
          // logos (and upload new ones) directly in TinaCMS.
          {
            type: "object",
            name: "apoios",
            label: "Apoios & Patrocínios (logos)",
            description: "Support/partner logos shown at the bottom of the project page.",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Novo Apoio" }) },
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "image", name: "logo", label: "Logo" },
              { type: "string", name: "website", label: "Website URL" },
            ],
          },
          // ---- Winter School structured sections (edited as forms, no HTML) ----
          {
            type: "object",
            name: "blocosTematicos",
            label: "Blocos Temáticos / Thematic Blocks",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Bloco" }) },
            fields: [
              { type: "string", name: "icon", label: "Icon (emoji)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "horario",
            label: "Horário / Schedule (images)",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.caption || "Dia / Day" }) },
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "caption", label: "Caption / Day" },
            ],
          },
          {
            type: "object",
            name: "oradores",
            label: "Oradores / Speakers",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || item?.slot || "Sessão / Session" }) },
            fields: [
              {
                type: "string", name: "theme", label: "Theme / Bloco",
                options: ["Telescópios", "Telescopes", "Satélites", "Satellites", "Downstream", "Sistemas de Lançamento", "Launch Systems", "Beyond Engineering", "Hackathon"],
              },
              { type: "string", name: "slot", label: "Date / Time / Type (e.g. 10 FEV - 15:00 - Palestra)" },
              { type: "string", name: "name", label: "Name (leave empty for a non-speaker event)" },
              { type: "string", name: "role", label: "Role" },
              { type: "image", name: "photo", label: "Photo" },
              {
                type: "object", name: "logos", label: "Organisation Logos", list: true,
                ui: { itemProps: (item) => ({ label: item?.alt || "Logo" }) },
                fields: [
                  { type: "image", name: "image", label: "Logo" },
                  { type: "string", name: "alt", label: "Organisation name (alt)" },
                ],
              },
              { type: "string", name: "talkTitle", label: "Talk / Workshop Title" },
              { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
              { type: "string", name: "bio", label: "Biography", ui: { component: "textarea" } },
              { type: "string", name: "location", label: "Location (for events without a speaker)" },
            ],
          },
          {
            type: "object",
            name: "contacto",
            label: "Contacto / Contact",
            fields: [
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "instagram", label: "Instagram handle (e.g. @espacoaocubo)" },
              { type: "string", name: "instagramUrl", label: "Instagram URL" },
            ],
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      // ----------------------------------------------------
      // TEAM MEMBERS
      // ----------------------------------------------------
      {
        name: "team",
        label: "Team Members",
        path: "src/data",
        format: "json",
        match: { include: "teamMembers" },
        fields: [
          {
            type: "object",
            name: "projects",
            label: "Projects / Sections",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name_en || "New Project" }) },
            fields: [
              { 
                type: "string", 
                name: "id", 
                label: "Project ID", 
                required: true,
                // Dropdown to prevent typos in the code's ID mapping!
                options: ["association", "tejoone", "workshops", "space-school"] 
              },
              { type: "string", name: "name_en", label: "Name (EN)" },
              { type: "string", name: "name_pt", label: "Name (PT)" },
              { type: "string", name: "description_en", label: "Description (EN)", ui: { component: "textarea" } },
              { type: "string", name: "description_pt", label: "Description (PT)", ui: { component: "textarea" } },
              
              {
                type: "object",
                name: "organs",
                label: "Organs (Association)",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name_en || "New Organ" }) },
                fields: [
                  { type: "string", name: "id", label: "Organ ID" },
                  { type: "string", name: "name_en", label: "Organ Name (EN)" },
                  { type: "string", name: "name_pt", label: "Organ Name (PT)" },
                  {
                    type: "object",
                    name: "members",
                    label: "Members",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.name || "New Member" }) },
                    fields: teamMemberFields, // <-- Reusing our clean array!
                  },
                ],
              },
              {
                type: "object",
                name: "departments",
                label: "Departments",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name_en || "New Department" }) },
                fields: [
                  { type: "string", name: "id", label: "Department ID" },
                  { type: "string", name: "name_en", label: "Department Name (EN)" },
                  { type: "string", name: "name_pt", label: "Department Name (PT)" },
                  {
                    type: "object",
                    name: "members",
                    label: "Members",
                    list: true,
                    ui: { itemProps: (item) => ({ label: item?.name || "New Member" }) },
                    fields: teamMemberFields, // <-- Reusing our clean array!
                  },
                ],
              },
              {
                type: "object",
                name: "advisors",
                label: "Advisors",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name || "New Advisor" }) },
                fields: teamMemberFields, // <-- Reusing our clean array!
              }
            ],
          },
        ],
      },
      // ----------------------------------------------------
      // SPONSORS
      // ----------------------------------------------------
      {
        name: "sponsors",
        label: "Sponsors & Parceiros",
        path: "src/data",
        format: "json",
        match: { include: "sponsors" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "parceiros",
            label: "Parceiros",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Novo Parceiro" }) },
            fields: [
              { type: "string", name: "name", label: "Nome", required: true },
              { type: "image", name: "logo", label: "Logo" },
              { type: "string", name: "website", label: "Website URL" },
              { type: "string", name: "description", label: "Descrição", ui: { component: "textarea" } }
            ],
          },
          {
            type: "object",
            name: "patrocinios",
            label: "Patrocínios",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Novo Patrocínio" }) },
            fields: [
              { type: "string", name: "name", label: "Nome", required: true },
              { type: "image", name: "logo", label: "Logo" },
              { type: "string", name: "website", label: "Website URL" },
              { type: "string", name: "description", label: "Descrição", ui: { component: "textarea" } }
            ],
          },
          {
            type: "object",
            name: "apoios",
            label: "Apoios",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.name || "Novo Apoio" }) },
            fields: [
              { type: "string", name: "name", label: "Nome", required: true },
              { type: "image", name: "logo", label: "Logo" },
              { type: "string", name: "website", label: "Website URL" }
            ],
          }
        ],
      },
      // ----------------------------------------------------
      // WEBSITE TEXT (i18n) — Homepage, TejoOne page, and every
      // other translated string. One document per language.
      // The schema (tina/i18nFields.js) is auto-generated to cover
      // the COMPLETE file, so saving never drops untouched sections.
      // ----------------------------------------------------
      {
        name: "translations",
        label: "Overall Website Text",
        path: "src/data",
        format: "json",
        // Matches src/data/en.json and src/data/pt.json only.
        match: { include: "{en,pt}" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: translationFields,
      },
    ],
  },
});
