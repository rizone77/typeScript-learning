// enum

// set of fixed string leteral ek jaigai rakhe

//ype UserRoles = "Admin" | "Editor" | 'Viewer';

// enum UserRoles{
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }


const UserRoles = {
      Admin : "ADMIN",
    Editor : "EDITOR",
    Viewer : "VIEWER"
} as const;

/*
    Admin : "Admin",
    Editor : "Editor",
    Viewer : "Viewer"

    1. typeof operator
    2. keyof operator


    const user = {
    id: 222,
    name: 'Rakib
    }

    user['id'] >> 222

    typeof user;

     {
    id: number
    name: string
    }

    typeof UserRoles

    {
    Admin: 'Admin
    Editor : "Editor",
    Viewer : "Viewer"
    }

    {
    keyof   typeof  typeof UserRoles
    'Admin' | 'Editor' | 'Viewer'
     'ADMIN' | 'EDITOR' | 'VIEWER'

  UserWithRole['Admin'] >> 'ADMIN'
     UserRoles[keyof typeof UserRoles]
    }
   

*/




const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }
    else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable)