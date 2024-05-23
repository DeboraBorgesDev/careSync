import React from 'react';
import {  createBrowserRouter } from 'react-router-dom';
import LoginPage from '../screens/login';


export const router = createBrowserRouter([
	// {
	// 	path: "/",
	// 	element: <HomePage />,
	// },
	// {
	// 	path: "/room/:roomId",
	// 	element: <RoomPage />,
	// },
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "*",
		element: <LoginPage />,
	},
])