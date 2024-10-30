import { NavigationItems } from "../types/interface";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import {
  MdOutlineAnalytics,
  MdInbox,
  MdOutlineShoppingBag,
  MdOutlineFireTruck,
} from "react-icons/md";

export const navigationItems: NavigationItems[] = [
  {
    linkId: 1,
    linkIcon: MdOutlineAnalytics,
    linkName: "Dashboard",
    LinkUrl: "/views/dashboard",
  },
  {
    linkId: 2,
    linkIcon: MdInbox,
    linkName: "Products",
    LinkUrl: "/views/products",
  },
  {
    linkId: 3,
    linkIcon: BiMoneyWithdraw,
    linkName: "POS",
    LinkUrl: "/views/pos",
  },
  {
    linkId: 4,
    linkIcon: MdOutlineShoppingBag,
    linkName: "Sales",
    LinkUrl: "/views/sales",
  },
  {
    linkId: 5,
    linkIcon: IoPeopleOutline,
    linkName: "Clients",
    LinkUrl: "/views/clients",
  },
  {
    linkId: 6,
    linkIcon: MdOutlineFireTruck,
    linkName: "Providers",
    LinkUrl: "/views/providers",
  },
];
