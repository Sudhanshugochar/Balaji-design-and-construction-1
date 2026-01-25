import { FileText } from 'lucide-react';

interface PDFViewerProps {
  src: string;
  title: string;
}

const PDFViewer = ({ src, title }: PDFViewerProps) => {
  return (
    <div className="w-full aspect-[3/4] lg:aspect-[16/9] bg-muted rounded-lg overflow-hidden border border-border relative">
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        style={{ border: 'none' }}
      />
      {/* Fallback for browsers that don't support iframe PDF */}
      <noscript>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary text-center p-8">
          <FileText className="w-16 h-16 text-primary mb-4" />
          <p className="text-foreground font-medium mb-2">PDF Viewer</p>
          <p className="text-muted-foreground text-sm">
            Your browser doesn't support embedded PDFs.
          </p>
          <a 
            href={src} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 text-primary hover:underline"
          >
            Open PDF in new tab
          </a>
        </div>
      </noscript>
    </div>
  );
};

export default PDFViewer;
