# Walkability Thesis – Interactive System Diagram

This project presents an interactive visual flowchart for the research thesis **"Walkability: Sense and Analyze"**.  
It illustrates the experimental architecture for sensing, analyzing, and modeling pedestrian behavior using wearable technologies.

---

## 🧭 Overview

The system combines:

- **Wearable Sensors**: IMU (motion), GPS, GSR (electrodermal activity), HRV (heart rate variability), and temperature
- **Physiological Analysis**: Detects stress, exertion, and environmental responses
- **Motion Analysis**: Gait, stability, speed, and step dynamics
- **GIS Contextualization**: Urban heat, noise, and infrastructure layers
- **Advanced Analytics**: Logit, Drift-Diffusion, and Mixed-Effects models

These components are integrated to compute a **personalized walkability index**.

---

## 📂 Project Structure

- `WalkabilityFlow.jsx` – renders the flowchart with Tailwind-styled cards and icons
- `main.jsx` – entry point for rendering the React component
- `index.css` – includes Tailwind base/utilities
- `index.html` – base HTML container
- `vite.config.js` – build configuration
- `README.md` – this documentation

---

## 🖼️ Preview

![System Diagram Preview](walkability-diagram-preview.png)

---

## 🧰 Built With

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧩 [Lucide Icons](https://lucide.dev/)

---

## 🚀 Deployment on Vercel

1. Fork or clone this repository
2. Go to [https://vercel.com](https://vercel.com)
3. Click “Import Project” → Select this repo
4. Hit **Deploy** and your site will be live!

---

## 🧠 Author

Developed by **Yarin Heisler**  
Master’s in Mechatronics Engineering  
Thesis project under: *“Smart Mobility in the Automated and Connected Era (WIT²)”*

---

## 📜 License

This project is released under the MIT License.