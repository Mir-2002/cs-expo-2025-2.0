import React from "react";

interface DevDaysFrameProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * DevDaysFrame - Custom futuristic sci-fi frame component
 * Inspired by advanced tech interface panels - clean, precise, and engineered
 * Creates a lightweight, technical display window aesthetic
 */
export default function DevDaysFrame({ children, className = "" }: DevDaysFrameProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Image Content Area - No padding, images touch frame edges */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {children}
      </div>

      {/* Enhanced Futuristic Frame Container - Layered design */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Outer Frame Border - Dark blue, bold */}
        <div 
          className="absolute inset-0"
          style={{
            border: '5px solid #2a4a6b',
            borderRadius: '0px',
          }}
        />

        {/* Inner Frame Border - Lighter blue, creates layered effect */}
        <div 
          className="absolute inset-[5px]"
          style={{
            border: '2px solid #5a7a9a',
            borderRadius: '0px',
          }}
        />

        {/* Top-Left Corner - Enhanced angular cut */}
        <div 
          className="absolute top-0 left-0"
          style={{
            width: '32px',
            height: '32px',
            borderTop: '5px solid #2a4a6b',
            borderLeft: '5px solid #2a4a6b',
            clipPath: 'polygon(0 0, 50% 0, 50% 30%, 100% 30%, 100% 100%, 0 100%)',
          }}
        />
        {/* Inner corner detail */}
        <div 
          className="absolute top-[5px] left-[5px]"
          style={{
            width: '22px',
            height: '22px',
            borderTop: '2px solid #5a7a9a',
            borderLeft: '2px solid #5a7a9a',
            clipPath: 'polygon(0 0, 50% 0, 50% 30%, 100% 30%, 100% 100%, 0 100%)',
          }}
        />
        {/* Corner protrusion */}
        <div 
          className="absolute top-[-5px] left-[-5px]"
          style={{
            width: '10px',
            height: '10px',
            background: '#2a4a6b',
          }}
        />

        {/* Top-Right Corner - Enhanced with extension */}
        <div 
          className="absolute top-0 right-0"
          style={{
            width: '32px',
            height: '32px',
            borderTop: '5px solid #2a4a6b',
            borderRight: '5px solid #2a4a6b',
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 30%, 50% 30%)',
          }}
        />
        {/* Inner corner detail */}
        <div 
          className="absolute top-[5px] right-[5px]"
          style={{
            width: '22px',
            height: '22px',
            borderTop: '2px solid #5a7a9a',
            borderRight: '2px solid #5a7a9a',
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 30%, 50% 30%)',
          }}
        />
        {/* Light blue extension line */}
        <div 
          className="absolute top-[6px] right-[-5px]"
          style={{
            width: '12px',
            height: '3px',
            background: '#7a9aba',
          }}
        />

        {/* Left Edge - Enhanced segmented design */}
        <div 
          className="absolute top-[32px] left-0 bottom-[32px]"
          style={{
            width: '5px',
            background: '#2a4a6b',
          }}
        />
        {/* Inner left edge line */}
        <div 
          className="absolute top-[37px] left-[5px] bottom-[37px]"
          style={{
            width: '2px',
            background: '#5a7a9a',
          }}
        />
        {/* Left edge segmented accent */}
        <div 
          className="absolute top-[35%] left-0"
          style={{
            width: '5px',
            height: '20px',
            background: '#7a9aba',
          }}
        />

        {/* Right Edge - Enhanced layered design */}
        <div 
          className="absolute top-[32px] right-0 bottom-[32px]"
          style={{
            width: '5px',
            background: '#2a4a6b',
          }}
        />
        {/* Inner right edge line - creates depth */}
        <div 
          className="absolute top-[37px] right-[5px] bottom-[37px]"
          style={{
            width: '2px',
            background: '#5a7a9a',
          }}
        />
        {/* Right edge parallel accent line */}
        <div 
          className="absolute top-[25%] right-[7px] bottom-[30%]"
          style={{
            width: '1px',
            background: '#7a9aba',
            opacity: 0.7,
          }}
        />
        {/* Right edge angular detail */}
        <div 
          className="absolute top-[50%] right-0"
          style={{
            width: '10px',
            height: '3px',
            background: '#7a9aba',
            transform: 'rotate(-15deg)',
          }}
        />

        {/* Bottom-Left Corner - Enhanced L-shaped */}
        <div 
          className="absolute bottom-0 left-0"
          style={{
            width: '32px',
            height: '32px',
            borderBottom: '5px solid #2a4a6b',
            borderLeft: '5px solid #2a4a6b',
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 70%, 50% 100%, 0 100%)',
          }}
        />
        {/* Inner corner detail */}
        <div 
          className="absolute bottom-[5px] left-[5px]"
          style={{
            width: '22px',
            height: '22px',
            borderBottom: '2px solid #5a7a9a',
            borderLeft: '2px solid #5a7a9a',
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 70%, 50% 100%, 0 100%)',
          }}
        />
        {/* Bottom-left horizontal accent */}
        <div 
          className="absolute bottom-[6px] left-[10px]"
          style={{
            width: '16px',
            height: '3px',
            background: '#7a9aba',
          }}
        />
        {/* Bottom-left rectangle */}
        <div 
          className="absolute bottom-[-5px] left-[-5px]"
          style={{
            width: '10px',
            height: '6px',
            background: '#2a4a6b',
          }}
        />

        {/* Bottom-Right Corner - Enhanced mirrored L-shape */}
        <div 
          className="absolute bottom-0 right-0"
          style={{
            width: '32px',
            height: '32px',
            borderBottom: '5px solid #2a4a6b',
            borderRight: '5px solid #2a4a6b',
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%)',
          }}
        />
        {/* Inner corner detail */}
        <div 
          className="absolute bottom-[5px] right-[5px]"
          style={{
            width: '22px',
            height: '22px',
            borderBottom: '2px solid #5a7a9a',
            borderRight: '2px solid #5a7a9a',
            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%)',
          }}
        />
        {/* Bottom-right horizontal accent */}
        <div 
          className="absolute bottom-[6px] right-[10px]"
          style={{
            width: '16px',
            height: '3px',
            background: '#7a9aba',
          }}
        />
        {/* Bottom-right rectangle */}
        <div 
          className="absolute bottom-[-5px] right-[-5px]"
          style={{
            width: '10px',
            height: '6px',
            background: '#2a4a6b',
          }}
        />

        {/* Additional segmented accents on edges */}
        {/* Top edge segmented breaks */}
        <div 
          className="absolute top-[5px] left-[20%]"
          style={{
            width: '2px',
            height: '5px',
            background: '#7a9aba',
          }}
        />
        <div 
          className="absolute top-[5px] right-[20%]"
          style={{
            width: '2px',
            height: '5px',
            background: '#7a9aba',
          }}
        />

        {/* Bottom edge segmented breaks */}
        <div 
          className="absolute bottom-[5px] left-[25%]"
          style={{
            width: '2px',
            height: '5px',
            background: '#7a9aba',
          }}
        />
        <div 
          className="absolute bottom-[5px] right-[25%]"
          style={{
            width: '2px',
            height: '5px',
            background: '#7a9aba',
          }}
        />
      </div>
    </div>
  );
}
