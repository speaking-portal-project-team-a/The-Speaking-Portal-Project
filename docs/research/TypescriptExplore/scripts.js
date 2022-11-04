// Vanilla js
var ns = 'http://www.w3.org/2000/svg'
var div = document.getElementById('drawing') 
var svg = document.createElementNS(ns, 'svg')
svg.setAttributeNS(null, 'width', '100%')
svg.setAttributeNS(null, 'height', '100%')
div.appendChild(svg)
var rect = document.createElementNS(ns, 'rect')
rect.setAttributeNS(null, 'width', 100)
rect.setAttributeNS(null, 'height', 100)
rect.setAttributeNS(null, 'fill', '#f06')
svg.appendChild(rect)