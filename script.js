const container = document.getElementById("product-container");
const scrollBtn = document.getElementById("scroll-more");


const imageUrls = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
   'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
  'https://images.unsplash.com/photo-1520974735194-3c1f1c1d3a1a',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
  'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
];


function createProductCard(imageUrl, title, description) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = imageUrl + '?w=400&h=400&fit=crop';
  img.alt = title;

  const info = document.createElement('div');
  info.className = 'info';

  const h4 = document.createElement('h4');
  h4.textContent = title;

  const p = document.createElement('p');
  p.textContent = description;

  info.appendChild(h4);
  info.appendChild(p);
  card.appendChild(img);
  card.appendChild(info);

  return card;
}

function loadProducts(count = 12) {
  for (let i = 0; i < count; i++) {
    const imageUrl = imageUrls[i % imageUrls.length];
    const title = `Product ${container.children.length + 1}`;
    const description = 'Stylish and comfortable clothing.';
    const card = createProductCard(imageUrl, title, description);
    container.appendChild(card);
  }
}

loadProducts();

scrollBtn.addEventListener('click', () => {
  loadProducts();
});
