import React from 'react'
import NavBarM from './NavBarM'
import "../styles/medic.scss"
import { BsEyeFill } from "react-icons/bs";
import { Modal } from '@mui/material';

const diagnostico = [{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'No revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'Revisado',
    "prioridad":false,
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
}]

function Medic() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const revisados = diagnostico.filter(elem => elem.estado === 'Revisado')
    const nrevisados = diagnostico.filter(elem => elem.estado === 'No revisado')
    function Revisadop (verificador){
        if(verificador){
            return revisados.filter(elem => elem.prioridad === true)
        }else{
            return revisados.filter(elem => elem.prioridad === false)
        }
    }
  return (
    <>
    <NavBarM/>
    <div className='MainMedic'>
        <div className='container-medic'>
            <div className='navbarList'>
                <ul className="nav nav-underline navitem">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Revisado</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">No revisado</button>
                    </li>
                </ul>
                <div className='dropdown'>
                            <a className="btn btn-primary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filtrar por</a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick={() => Revisadop(true)}>Prioridad</a></li>
                                <li><a className="dropdown-item" onClick={() => Revisadop(false)}>Sin prioridad</a></li>
                            </ul>
                        </div>
                <div className="container-tab tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab-priority" tabIndex="0">
                        <div className='cards'>
                            {revisados.map((elem)=>
                            <div className='content-card'>
                                <div className='card'>
                                <div className='card-izq'>
                                        <h6>Nombre: {elem.name}</h6>
                                        <p>{elem.estado}</p>
                                </div>
                                <div className='card-der'>
                                        <button className='btn btn-primary' onClick={handleOpen}><BsEyeFill/></button>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <div className='cards'>
                            {nrevisados.map((elem)=>
                            <div className='content-card'>
                                <div className='card'>
                                <div className='card-izq'>
                                        <h6>Nombre: {elem.name}</h6>
                                        <p>{elem.estado}</p>
                                </div>
                                <div className='card-der'>
                                        <button className='btn btn-primary'><BsEyeFill/></button>
                                </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal className='container-modalmedic' open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
        <div className=''>
            gdgd
        </div>
    </Modal>
    </>
  )
}

export default Medic