var APP_DATA = {
  "scenes": [
    {
      "id": "0-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0814694710539428,
        "pitch": 0.049119502367547696,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -2.940064107279955,
          "pitch": 0.06738852434450138,
          "rotation": 0,
          "target": "0-garden"
        },
        {
          "yaw": -1.286446727234427,
          "pitch": 0.06654159875481369,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.7116500667760608,
          "pitch": -0.9851541463120164,
          "rotation": 0,
          "target": "10-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6509317523117408,
          "pitch": 0.021846263680584954,
          "rotation": 0,
          "target": "1-terrace"
        },
        {
          "yaw": 0.32253336700727964,
          "pitch": 0.05266837835116789,
          "rotation": 0,
          "target": "3-dining-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-room-1",
      "name": "Dining room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.065104480407131,
        "pitch": 0.12121638704324056,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -3.065104480407131,
          "pitch": 0.12121638704324056,
          "rotation": 0,
          "target": "4-dining-room-2"
        },
        {
          "yaw": 0.20842089834442667,
          "pitch": -0.032535570760380494,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.6405635193476158,
          "pitch": 0.15088883092716365,
          "rotation": 0,
          "target": "5-sitting-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-room-2",
      "name": "Dining room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16662573060239083,
          "pitch": 0.0507638432210058,
          "rotation": 0,
          "target": "3-dining-room-1"
        },
        {
          "yaw": -0.7651341754298961,
          "pitch": 0.0992336683704238,
          "rotation": 0,
          "target": "5-sitting-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sitting-room-1",
      "name": "Sitting room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.9624923250533897,
        "pitch": 0.1284580344453108,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -2.626921902459232,
          "pitch": 0.08789458267355599,
          "rotation": 0,
          "target": "3-dining-room-1"
        },
        {
          "yaw": -0.6952584895947371,
          "pitch": 0.12102819605811632,
          "rotation": 0,
          "target": "6-sitting-room-2"
        },
        {
          "yaw": 0.6257216820206217,
          "pitch": -0.4310439529952461,
          "rotation": 0,
          "target": "9-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sitting-room-2",
      "name": "Sitting room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8903053406788484,
          "pitch": 0.15571298279239265,
          "rotation": 0,
          "target": "5-sitting-room-1"
        },
        {
          "yaw": 2.632372126250238,
          "pitch": -0.21755264643739736,
          "rotation": 0,
          "target": "9-bedroom-1"
        },
        {
          "yaw": 1.2300156368375976,
          "pitch": 0.12522100739821518,
          "rotation": 0,
          "target": "7-living-room-1"
        },
        {
          "yaw": -2.612890302652099,
          "pitch": 0.07427459085175414,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-room-1",
      "name": "Living room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.8055386787524954,
        "pitch": 0.2607655393208894,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 2.369446216733623,
          "pitch": 0.13982253342136808,
          "rotation": 0,
          "target": "8-living-room-2"
        },
        {
          "yaw": -1.861806692174028,
          "pitch": 0.20798938082485208,
          "rotation": 0,
          "target": "6-sitting-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living-room-2",
      "name": "Living room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.8347053152194803,
        "pitch": 0.20085254702550692,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -1.5621673709803066,
          "pitch": 0.11027573702762439,
          "rotation": 0,
          "target": "7-living-room-1"
        },
        {
          "yaw": -2.3763603790505385,
          "pitch": 0.08746041416867989,
          "rotation": 0,
          "target": "6-sitting-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.271029882263096,
          "pitch": 0.5151947051021502,
          "rotation": 0,
          "target": "5-sitting-room-1"
        },
        {
          "yaw": 2.7968062239579634,
          "pitch": 0.21598102683650566,
          "rotation": 0,
          "target": "10-balcony"
        },
        {
          "yaw": 0.5132564849293821,
          "pitch": 0.06263484663982055,
          "rotation": 0,
          "target": "11-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.009108888125702208,
        "pitch": 0.14894664465160368,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 2.9668441826381695,
          "pitch": 0.14448683556557462,
          "rotation": 0,
          "target": "9-bedroom-1"
        },
        {
          "yaw": 0.45510397540525815,
          "pitch": 0.611541318680306,
          "rotation": 0,
          "target": "0-garden"
        },
        {
          "yaw": 0.37812534481610705,
          "pitch": 1.1745864954322975,
          "rotation": 0,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5962139930203083,
          "pitch": 0.21221227096517659,
          "rotation": 0,
          "target": "9-bedroom-1"
        },
        {
          "yaw": 3.082016525238126,
          "pitch": 0.34704522527499293,
          "rotation": 0,
          "target": "5-sitting-room-1"
        },
        {
          "yaw": -2.9291738651976136,
          "pitch": 0.07539391421618902,
          "rotation": 0,
          "target": "10-balcony"
        },
        {
          "yaw": 1.7906496214091279,
          "pitch": 0.22464593708676972,
          "rotation": 0,
          "target": "12-dressing-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-dressing-room-1",
      "name": "Dressing room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.519761402431092,
        "pitch": 0.2441335186242366,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -3.098826456317955,
          "pitch": 0.21933948632625722,
          "rotation": 0,
          "target": "14-bathroom"
        },
        {
          "yaw": 1.5403508952150267,
          "pitch": 0.10208012617677298,
          "rotation": 0,
          "target": "13-dressing-room-2"
        },
        {
          "yaw": -1.470516900172413,
          "pitch": 0.19730732599559886,
          "rotation": 0,
          "target": "11-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-dressing-room-2",
      "name": "Dressing room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.19669560600370417,
        "pitch": 0.08743941654945075,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 0.24334769225703745,
          "pitch": 0.07486670448578892,
          "rotation": 0,
          "target": "12-dressing-room-1"
        },
        {
          "yaw": 0.02232603498562824,
          "pitch": 0.07152478941336682,
          "rotation": 0,
          "target": "11-bedroom-2"
        },
        {
          "yaw": -0.4488877926824699,
          "pitch": 0.08621248441849261,
          "rotation": 0,
          "target": "14-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.3003729591623703,
        "pitch": 0.16096933328785212,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 0.5435907288484181,
          "pitch": 0.028437606633847423,
          "rotation": 0,
          "target": "12-dressing-room-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "2019-09 Nicosia",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
