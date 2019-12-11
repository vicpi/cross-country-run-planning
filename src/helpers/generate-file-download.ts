export const generateFileDownload = (content: string): void => {
    const blob = new Blob([content], { type: 'text/plain; encoding=utf8' });
    const url = window.URL.createObjectURL(blob);

    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = 'File.gpx';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}