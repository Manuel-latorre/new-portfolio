"use client";
import Carrusel from "@/components/Carrusel";
import React from "react";
import TechnologyBox from "../TechnologyBox";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import NextIcon from "@/components/icons/NextIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import WebIcon from "@/components/icons/WebIcon";
import Link from "next/link";
import MexicoIcon from "@/components/icons/MexicoIcon";
import { useLanguage } from "@/context/translate";
import Image from "next/image";
import tech from "./techshop.png";
import SupabaseIcon from "@/components/icons/SupabaseIcon";
import ChatGPTIcon from "@/components/icons/ChatGPTIcon";
import MongoDbIcon from "@/components/icons/MongoDbIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import Modal from "../Modal/Modal";
import TechShopIcon from "@/components/icons/TechShopIcon";
const TechShop = () => {
  const { isEnglish } = useLanguage();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center text-white font-medium text-2xl gap-2 max-sm:hidden">
        Tech Shop
      </div>

      <span className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent font-medium text-2xl max-sm:hidden">
        {isEnglish ? "Personal Project" : "Proyecto personal"}
      </span>
      <div className="max-sm:hidden">
        <p className="text-white font-medium text-lg">Dicimebre 2023</p>
      </div>

      <div className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] p-3 rounded-xl flex flex-col justify-center items-center h-[200px] sm:hidden">
      <div className="mb-5">
          <TechShopIcon/>
        </div>
        <Modal
          title="Tech Shop"
          date={
            <p className="text-white font-medium text-lg">Dicimebre 2023</p>
          }
          text1={
            <div className="flex items-center text-white justify-between gap-24 max-lg:flex-col max-lg:gap-12">
              <div className="flex flex-col gap-3 lg:w-[60%]">
                <div>
                  {isEnglish ? (
                    <p>
                      Tech Shop API Database is a website that offers a REST API
                      to manage technological products such as headphones,
                      keyboards, and consoles. The API allows CRUD operations
                      (Create, Read, Update, Delete) on three main models:{" "}
                      <br />
                      <br />
                      Productos: Represents items available in the store, with
                      properties like name, description, price, and category.{" "}
                      <br /> <br />
                      Carrito: Manages the products users add to their shopping
                      carts, including user ID, list of products, and quantity
                      of each product. <br /> <br />
                      Usuarios: Handles user information, including properties
                      like name, email, and password. <br /> <br />
                      El backend is developed with Express and uses MongoDB for
                      data storage. The documentation section (Docs) provides
                      all the necessary information for consuming the API.
                    </p>
                  ) : (
                    <p>
                      Tech Shop API Database es un sitio web que ofrece una API
                      REST para gestionar productos tecnológicos como
                      auriculares, teclados y consolas. La API permite realizar
                      operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre
                      tres modelos principales: <br />
                      <br />
                      Productos: Representa los artículos disponibles en la
                      tienda, con propiedades como nombre, descripción, precio y
                      categoría. <br /> <br />
                      Carrito: Administra los productos que los usuarios agregan
                      a sus carritos de compras, incluyendo el ID del usuario,
                      lista de productos y cantidad de cada producto. <br />{" "}
                      <br />
                      Usuarios: Gestiona la información de los usuarios, con
                      propiedades como nombre, correo electrónico y contraseña.{" "}
                      <br /> <br />
                      El backend está desarrollado con Express y utiliza MongoDB
                      para el almacenamiento de datos. La sección de
                      documentación (Docs) proporciona toda la información
                      necesaria para consumir la API.
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <span className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent font-medium text-lg">
                    {isEnglish ? "Technologies" : "Tecnologías utilizadas"}
                  </span>

                  <div className="flex items-center flex-wrap gap-2 max-md:justify-center">
                    <TechnologyBox
                      icon={<TypescriptIcon />}
                      technology="Typescript"
                    />
                    <TechnologyBox icon={<NextIcon />} technology="Next Js" />
                    <TechnologyBox
                      icon={<TailwindIcon />}
                      technology="Tailwind css"
                    />
                    <TechnologyBox icon={<NodeIcon />} technology="Node Js" />
                    <TechnologyBox
                      icon={<ExpressIcon />}
                      technology="Express"
                    />
                    <TechnologyBox
                      icon={<MongoDbIcon />}
                      technology="Mongo DB"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%]">
                <Image src={tech} alt="tualo" width={1000} height={1000} />
              </div>
            </div>
          }
        />
      </div>
      <div className="flex items-center text-white justify-between gap-24 max-lg:flex-col max-lg:gap-12 max-sm:hidden">
        <div className="flex flex-col gap-3 lg:w-[60%]">
          <div>
            {isEnglish ? (
              <p>
                Tech Shop API Database is a website that offers a REST API to
                manage technological products such as headphones, keyboards, and
                consoles. The API allows CRUD operations (Create, Read, Update,
                Delete) on three main models: <br />
                <br />
                Productos: Represents items available in the store, with
                properties like name, description, price, and category. <br />{" "}
                <br />
                Carrito: Manages the products users add to their shopping carts,
                including user ID, list of products, and quantity of each
                product. <br /> <br />
                Usuarios: Handles user information, including properties like
                name, email, and password. <br /> <br />
                El backend is developed with Express and uses MongoDB for data
                storage. The documentation section (Docs) provides all the
                necessary information for consuming the API.
              </p>
            ) : (
              <p>
                Tech Shop API Database es un sitio web que ofrece una API REST
                para gestionar productos tecnológicos como auriculares, teclados
                y consolas. La API permite realizar operaciones CRUD (Crear,
                Leer, Actualizar, Eliminar) sobre tres modelos principales:{" "}
                <br />
                <br />
                Productos: Representa los artículos disponibles en la tienda,
                con propiedades como nombre, descripción, precio y categoría.{" "}
                <br /> <br />
                Carrito: Administra los productos que los usuarios agregan a sus
                carritos de compras, incluyendo el ID del usuario, lista de
                productos y cantidad de cada producto. <br /> <br />
                Usuarios: Gestiona la información de los usuarios, con
                propiedades como nombre, correo electrónico y contraseña. <br />{" "}
                <br />
                El backend está desarrollado con Express y utiliza MongoDB para
                el almacenamiento de datos. La sección de documentación (Docs)
                proporciona toda la información necesaria para consumir la API.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <span className="bg-gradient-to-r from-[#F1FF4D] to-[#3ECF8E] bg-clip-text text-transparent font-medium text-lg">
              {isEnglish ? "Technologies" : "Tecnologías utilizadas"}
            </span>

            <div className="flex items-center flex-wrap gap-2">
              <TechnologyBox
                icon={<TypescriptIcon />}
                technology="Typescript"
              />
              <TechnologyBox icon={<NextIcon />} technology="Next Js" />
              <TechnologyBox
                icon={<TailwindIcon />}
                technology="Tailwind css"
              />
              <TechnologyBox icon={<NodeIcon />} technology="Node Js" />
              <TechnologyBox icon={<ExpressIcon />} technology="Express" />
              <TechnologyBox icon={<MongoDbIcon />} technology="Mongo DB" />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <Image src={tech} alt="tualo" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default TechShop;

/* Tech Shop API Database es un sitio web que ofrece una API REST para gestionar productos tecnológicos como auriculares, teclados y consolas. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre tres modelos principales:

Productos: Representa los artículos disponibles en la tienda, con propiedades como nombre, descripción, precio y categoría.
Carrito: Administra los productos que los usuarios agregan a sus carritos de compras, incluyendo el ID del usuario, lista de productos y cantidad de cada producto.
Usuarios: Gestiona la información de los usuarios, con propiedades como nombre, correo electrónico y contraseña.
El backend está desarrollado con Express y utiliza MongoDB para el almacenamiento de datos. La sección de documentación (Docs) proporciona toda la información necesaria para consumir la API.

En resumen, esta aplicación permite administrar de manera eficiente y segura productos, usuarios y carritos de compra mediante operaciones CRUD */
