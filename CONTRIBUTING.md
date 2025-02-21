# 🚀 Contributing to Resourcify

Thank you for your interest in contributing to **Resourcify**! 🎉 This project relies on the community to continue growing and providing more useful resources for everyone.

## 🛠️ How to Contribute?

You can contribute new resources to **Resourcify** in two ways:

1️⃣ **Suggesting resources in issues** 👉 [Open an issue](https://github.com/anibalcoder/resourcify/issues)

2️⃣ **Submitting a Pull Request** 👉 [Follow the instructions](https://github.com/anibalcoder/resourcify/blob/main/PULL_REQUEST_TEMPLATE.md)

## 🔄 Contributing via Pull Request

If you want to add a new resource directly to the project, follow these steps:

✅ **Step 1:** Go to the [resources](https://github.com/anibalcoder/resourcify/tree/main/src/data/resources/) directory.

✅ **Step 2:** Open a JSON file inside the directory and add a new object following the structure below.

✅ **Step 3:** Ensure your contribution follows the conventions established in this document.

✅ **Step 4:** Create a **Pull Request** with your changes and wait for review.

## 📌 Object Structure

Each resource must follow this structure:

```json
{
  "id": 1,
  "name": "Resource name",
  "link": "https://resource.com",
  "img": "https://res.cloudinary.com/cloudvault/image/upload/resourcify/category/name",
  "type": "Type of resource",
  "usage": 5
}
```

### 📝 Field Explanation

🔹`id`: Unique sequential number for each resource (e.g., if the last ID is 6, the new one should be 7).

🔹`name`: Name of the resource.

🔹`link`: Official link to the resource.

🔹`img`: URL of the resource image. Example:

```
https://res.cloudinary.com/cloudvault/image/upload/resourcify/tools/svgomg
```

🔹`type` (**Optional**): Type of resource, only applicable to `tools.json` or `chromeExtensions.json`. Example: `"SVG optimizer"`

🔹`usage`: Usage level of the resource based on the table below.

---

## 📊 Usage Levels

| Value (`usage`) | Descriptive Name |
| --------------- | ---------------- |
| 1               | `"rarely"`       |
| 2               | `"occasionally"` |
| 3               | `"sometimes"`    |
| 4               | `"frequently"`   |
| 5               | `"always"`       |

## ❓ Questions or Suggestions?

If you have any questions or suggestions, [open an issue](https://github.com/anibalcoder/resourcify/issues) in the repository or join the community discussion.

💙 Thank you for contributing to **Resourcify** and helping improve this incredible collection of resources! 🚀🎨