FROM node:20-alpine 

WORKDIR /frontend

COPY package*.json ./
RUN npm install --include=optional
COPY . .

EXPOSE 5173
CMD [ "npm", "run", "dev" ]


#  docker run --name client-container -p 5173:5173 client-app npm run dev -- --host 

# # Build stage
# FROM node:20-alpine AS build

# WORKDIR /frontend
# COPY package*json ./
# RUN npm install
# COPY . .

# RUN npm run build

# # Production stage
# FROM node:20-alpine

# WORKDIR /frontend

# COPY --from=build /frontend/dist ./dist

# EXPOSE 5173
# CMD [ "npm", "run", "dev" ]