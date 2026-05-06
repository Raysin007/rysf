# Final Polish and Social Media Updates

## Context
The project is nearing production. We need to perform final UI polishing, especially the navbar and team section, and update social media handles as per the user's latest instructions.

## Proposed Changes

### 1. Navbar Updates
- **Distraction-free Mobile Menu**:
  - Hide the Language Selector and the Login link when the hamburger menu is open.
  - Ensure only the close button, main navlinks, and the "Donate" CTA are visible.
- **Remove Navbar Underline**:
  - Audit the navbar styles to remove any bottom border or shadow that looks like a white underline.

### 2. Team Section Updates
- **Interface Update**: Add `facebook?: string` to the `TeamMember` interface.
- **Icon Update**: Add a `FacebookIcon` component using a standard SVG path.
- **Member Updates**:
  - **Member 5 (Santam)**: Replace `instagram` with `facebook`.
  - **Subhendu**: Remove the `linkedin` property.
- **Logic Update**: Update the `MemberModal` to render the Facebook icon if a member has a `facebook` property.
- **UI Polish**:
  - Confirm the heading spacing is sufficient (`mt-2` on the span).
  - Ensure expanded cards have no white borders (they currently use `shadow-lg-custom` and `rounded-[24px]` with no explicit border).

### 3. Hero Section Cleanup
- Verify labels (Mirik/Plassey) are plain text with no borders or background.

## Critical Files
- `src/components/Navbar.tsx`
- `src/components/TeamSection.tsx`

## Verification Plan
1. **Manual Inspection**:
   - Open the mobile menu and verify only navlinks and Donate CTA are shown.
   - Verify logo and theme toggle are hidden.
   - Check the Team Modal for Member 5 and verify the Facebook icon.
   - Check Subhendu's modal and verify LinkedIn is absent.
   - Verify the navbar looks clean without any unwanted underline.
2. **TypeScript Check**:
   - Run `npm run build` or check for TS errors in `TeamSection.tsx` after updating the interface and members.
