'use client';

import React from 'react';

export type IconType = keyof typeof icons;

export const icons = {
  home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 576 512" {...props}>
      <path d="M277.4 4c6-5.3 15.1-5.3 21.2 0l272 240c6.6 5.8 7.3 16 1.4 22.6s-16 7.3-22.6 1.4L512 235v197c0 44.2-35.8 80-80 80H144c-44.2 0-80-35.8-80-80V235l-37.4 33c-6.6 5.8-16.8 5.2-22.6-1.4s-5.2-16.8 1.4-22.6l272-240zM96 206.7V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V206.7L288 37.3 96 206.7z" />
    </svg>
  ),

  about: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M26,52A26,26,0,0,1,22.88.19,25.78,25.78,0,0,1,34.73,1.5a2,2,0,1,1-1.35,3.77,22,22,0,0,0-21,38,22,22,0,0,0,35.41-20,2,2,0,1,1,4-.48A26,26,0,0,1,26,52Z"></path>
        <path d="M26,43.86a2,2,0,0,1-2-2V22.66a2,2,0,1,1,4,0v19.2A2,2,0,0,1,26,43.86Z"></path>
        <circle cx="26" cy="15.71" r="2.57"></circle>
      </g>
    </svg>
  ),

  writings: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 448 512" {...props}>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path className="st0" d="M422.002,6.017C315.33,20.736,213.205,220.861,162.939,313.486c-12.641,23.297,9.422,35.406,22.422,13.125 c9.344-16.016,32.109-62.5,44.422-60.094c58.797,9.797,90.156-28.547,67.891-52.672c74.797,1.531,111.875-39.609,90.656-64.609 c22.313,7.063,55.078,6.031,83.766-9.609C533.33,106.22,529.627-8.827,422.002,6.017z"></path> <path className="st0" d="M409.189,207.048c-9.719,9.141-27.031,22.141-41.547,27.813v207.062c-0.016,4.609-1.781,8.531-4.781,11.563 c-3.031,3-6.953,4.766-11.547,4.781H65.361c-4.594-0.016-8.531-1.781-11.563-4.781c-3-3.031-4.766-6.953-4.781-11.563V155.986 c0.016-4.594,1.781-8.531,4.781-11.563c3.031-3,6.969-4.766,11.563-4.781h160.391c11.234-17.125,22.734-33.578,34.484-49.016 H65.361c-17.969-0.016-34.469,7.344-46.219,19.141c-11.781,11.75-19.156,28.25-19.141,46.219v285.937 c-0.016,17.969,7.359,34.469,19.141,46.234c11.75,11.781,28.25,19.156,46.219,19.141h285.953 c17.953,0.016,34.453-7.359,46.219-19.141c11.781-11.766,19.156-28.266,19.141-46.234V206.017 C416.674,206.017,414.002,202.517,409.189,207.048z"></path> </g> </g>
    </svg>

  ),

  arrow: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 12 12" {...props} fill="none">
      <path
        fill="currentColor"
        d="M2.071 11.35.963 10.241l8.239-8.253H2.838L2.852.455h8.992V9.46h-1.548l.014-6.363-8.239 8.252Z"
      />
    </svg>
  ),

  arrowTop: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        fill="currentColor"
        d="m34.9 289.5-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
      />
    </svg>
  ),

  views: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        stroke="currentColor"
        d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941"
      />
    </svg>
  ),

  moon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M190.6 66.8c-38.8 37.8-62.9 90.7-62.9 149.2 0 108.9 83.5 198.3 189.9 207.3-27.8 15.7-59.9 24.7-94.1 24.7C117.7 448 32 362.1 32 256c0-94.8 68.5-173.5 158.6-189.2zm66.1-21.5c-1.5-6.9-7.3-11.9-14.3-12.5-6.3-.5-12.6-.8-19-.8C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3z" />


    </svg>
  ),

  sunny: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M256 0c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16zM0 256c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zm400 0c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-8.8 0-16-7.2-16-16zM256 400c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16zM75 75c6.2-6.2 16.4-6.2 22.6 0l56.6 56.6c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L75 97.6c-6.2-6.2-6.2-16.4 0-22.6zm0 362c-6.2-6.2-6.2-16.4 0-22.6l56.6-56.6c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L97.6 437c-6.2 6.2-16.4 6.2-22.6 0zm282.8-282.8c-6.2-6.2-6.2-16.4 0-22.6L414.4 75c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-56.6 56.6c-6.2 6.2-16.4 6.2-22.6 0zm0 203.6c6.2-6.2 16.4-6.2 22.6 0l56.6 56.6c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-56.6-56.6c-6.2-6.2-6.2-16.4 0-22.6zM336 256a80 80 0 1 0-160 0 80 80 0 1 0 160 0zm-192 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0z" />

    </svg>
  ),

  desktop: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 576 512" {...props}>
      <path d="M512 32H64c-17.7 0-32 14.3-32 32v192h512V64c0-17.7-14.3-32-32-32zm64 224v96c0 35.3-28.7 64-64 64H362.9l10.7 64H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h58.4l10.7-64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h448c35.3 0 64 28.7 64 64v192zM32 288v64c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-64H32zm202.9 192h106.2l-10.7-64h-84.8l-10.7 64z" />

    </svg>
  ),

  bars: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M0 64h448v64H0V64zm0 160h448v64H0v-64zm448 160v64H0v-64h448z" />
    </svg>
  )
}