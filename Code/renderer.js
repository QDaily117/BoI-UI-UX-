document.getElementById('attachBtn').addEventListener('click', async () => {
  const processName = document.getElementById('processName').value;
  const statusDiv = document.getElementById('status');
  if (!processName) {
    statusDiv.textContent = 'Please enter a process name.';
    return;
  }
  statusDiv.textContent = 'Attaching...';
  try {
    const result = await window.electronAPI.attachToApp(processName);
    statusDiv.textContent = result ? 'Attached successfully!' : 'Failed to attach.';
  } catch (e) {
    statusDiv.textContent = 'Error: ' + e.message;
  }
});
