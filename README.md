# Johanne E-commerce

## Technologies

- [React](https://reactjs.org/).
- [Redux Toolkit](https://redux-toolkit.js.org/).
- [Vite](https://vitejs.dev/)
- [React Router DOM v6.8](https://reactrouter.com/en/main)
- [Tailwindcss](https://tailwindcss.com/docs/installation)
- [MUI](https://mui.com/)
- [Stripe](https://stripe.com/)

## About

**Johanne** is a fictional e-commerce store related to swimwear.
I build this project to enhace my skills with React and Redux. The ultimate goal was to provide an intuitive interface and the experience of a real e-commerce website. I was able to utilize Redux Toolkit to take care of the products and cart state. Also, used tailwindcss and MUI to style the website. It is responsive accross all devices.

## Challenges

- My biggest challenge was to integrate Stripe for checkout. My first attempt was to build a server to connect the store to stripe but I did not have much knowledge on how the backend works, I decided to use the client side alternative. By watching this tutorial [Youtube link](https://youtu.be/BSN2KcB_h-M) and reading Stripe documentation I was able to add it to my project.
- Another problem I faced was with React Router. I was very much unaware that React-Router 'only' provides client-side routing which means my app updates the URL without making a request for another document from the server and whenever I refreshed my pages with exception of the homepage, the website would crash. To fix this issue I provided vercel with the code below.
  
```json
{
    "rewrites": [{"source": "/(.*)", "destination": "/"}]
}
```

## Still Working

I am still working on this project UI and learning more about Redux Persist to be store the product data in the localStorage. Also, studying Nodejs and MondoDB to make this project a fullstack.

## Hosting

The project is currently being hosted on Vercel

![Screen Shot 2023-02-11 at 15 27 23](https://user-images.githubusercontent.com/107408196/218266865-4e733de6-ffed-4ade-ad1e-97a5925ceec3.png)
