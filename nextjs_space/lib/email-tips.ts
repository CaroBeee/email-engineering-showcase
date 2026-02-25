// Safe design for forced-inversion clients (Outlook Online)
export const safeDesignNotes = `
  /* Outlook Online forced-inversion safe design:
   * - Avoid pure white (#fff) backgrounds, use #fafafa
   * - Avoid pure black (#000) text, use #1a1a1a
   * - Use semi-transparent overlays for images
   * - Test with Windows High Contrast mode
   * - no border-radius in MSO Rounded corners can be used in VML with the RoundRect element. See buttons.cm and VML documentation.
   */
`;
