---
created: 2025-06-10 15:43:32
modified: 2025-06-18 13:18:49
tags:
  - computer-vision
---
### The Gist of ROI Generation
While you _could_ theoretically create ROIs by simply drawing every possible rectangle on a grid (like using a fixed-size "bin" and expanding it by a certain `stride`), this method is unlikely to effectively capture your interests.

### Smarter Approaches to Finding ROIs
Instead, modern object detection relies on intelligent methods to propose relevant ROIs effectively and efficiently:
- **Selective Search:** This technique groups similar pixels into regions and then hierarchically merges them to suggest potential object locations.
- **EdgeBoxes:** By focusing on strong edge contours, this method generates bounding box proposals that likely contain objects.
- **Region Proposal Networks (RPN):** The most popular method, RPNs are small neural networks trained to directly predict object bounding boxes and their "objectness" scores from the image's features. This makes the ROI generation process much faster and more accurate, as it's learned as part of the overall detection system.
These advanced techniques ensure we're looking at the most promising areas without having to check every single possibility.