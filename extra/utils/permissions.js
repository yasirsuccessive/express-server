import { permissions } from "../constants";

export default function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType.includes(role)] ||
      permissions[moduleName]["all"]
    ) {
      console.log(
        `${role} have permission to ${permissionType} for the module ${moduleName}`
      );
    } else {
      console.log(
        `${role} do not have permission to ${permissionType} for the module ${moduleName}`
      );
    }
  } else {
    console.log(
      `${role} do not have permission to ${permissionType} for the module ${moduleName}`
    );
  }
}
