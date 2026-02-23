---

title: 'Beyond CRUD: Architecting Backends with Modern Languages'
published: 2024-02-26
tags: ["Backend", "Architecture", "Software Architecture"]
---

Recently, I've stumbled across the newer languages and frameworks that are prevalent and expected by the dev community to be the future of backend.
I tried Rust [tokio-rs/axum](https://github.com/tokio-rs/axum) the framework way and also Go minimalistic net/http way. And incorporated best practices in the architecture.

## Routing Layer

The routing layer is responsible for defining the URL paths for incoming requests. It acts as the entry point for requests, directing them to the appropriate handler based on the specified path.

## Middleware Layer

Middleware functions as a pre-handler, allowing you to run code before passing the request to the handler. This is commonly used for tasks such as validation, authentication, logging, and request processing. Middleware helps to modularize and reuse code across different parts of your application.

## Handler/Controller Layer

The handler/controller layer serves as the bridge between the frontend and backend. It receives incoming data from the frontend, processes it, and sends outgoing data back to the frontend. This layer plays a crucial role in handling user requests and orchestrating the flow of data within the application.

## Service Layer

The service layer is where complex business logic resides. It abstracts away the logic from the handler/controller layer, keeping it clean and focused. This layer is particularly useful for handling complex operations that would otherwise clutter the handler/controller code.

## Data Access/Repository Layer

The data access layer is responsible for interacting with the database and performing data operations. It handles low-level tasks such as SQL queries, data manipulation, and database transactions. Separating this layer from the rest of the application logic helps maintain a clear separation of concerns and improves overall code maintainability.

By understanding and implementing these architectural principles, developers can create robust, scalable, and maintainable backend systems. While the specific technologies and languages may vary, the core concepts remain consistent, making these principles applicable across a range of backend development scenarios.
