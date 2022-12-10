# Static-Node-and-Express-Site Changes in CSS

# Changed background color of side bar and body
.sidebar
  background: #000 -> #191600
body {
  background: #000 -> #191600

# Changed Fonts globally
font-family: ui-rounded;

# Smaller sidebar
.sidebar .thumbnail {
  max-width: 250 px -> 150px;

# Hover rotate on index page when hovering over projects
.cell img {
  width: 100%;
  min-width: 100px;
  border: 4px solid #fff;
  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
  transition: all 0.3s;
  box-sizing: border-box;
  max-width: 100%;
}

.cell:hover img {
  transform: scale(1.01) rotate(5deg);
}

