import React from "react";
import { renderRoutes } from "react-router-config";
import { pages } from "../containers";

export const Routes = () => <>{renderRoutes(pages())}</>;
