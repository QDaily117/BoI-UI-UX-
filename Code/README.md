# BoI UI Framework

This is a basic Electron-based UI framework with placeholders for Win32 API integration (for attaching to running Windows applications) and ML framework integration (OpenCV, TensorFlow, etc.).

## Structure
- `main.js`: Electron main process, sets up the window and Win32 API bridge.
- `preload.js`: Secure context bridge for renderer-main communication.
- `renderer.js`: UI logic for attaching to a process.
- `win32.js`: Placeholder for Win32 API integration (Windows only).
- `ml/`: Directory for ML framework integration.

## Usage
1. Install dependencies:
   ```bash
   cd Code
   npm install
   ```
2. Start the Electron app:
   ```bash
   npm start
   ```

## Notes
- Win32 API integration only works on Windows. The current implementation is a stub.
- Add your ML code in `ml/` and require it as needed.
