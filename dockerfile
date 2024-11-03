FROM node

WORKDIR C:\Users\zanel\OneDrive\Desktop\CMS_AI
COPY package.json ./ 
RUN npm install 

COPY . . 

EXPOSE 3333

CMD ["node", "app.js"]