var APP_DATA = {
  "scenes": [
    {
      "id": "0-acceso-calle",
      "name": "Acceso-Calle",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10308172240263147,
          "pitch": 0.14382112550197945,
          "rotation": 0,
          "target": "1-acceso-condominio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.42141933267720333,
          "pitch": -0.21346228376157228,
          "title": "Manuel Dublan #54",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-acceso-condominio",
      "name": "Acceso-Condominio",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.0135433606455742,
        "pitch": 0.1204598325545021,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4461971790124677,
          "pitch": 0.15131596206169107,
          "rotation": 0,
          "target": "2-recibidor-casa1"
        },
        {
          "yaw": 2.2780650435497716,
          "pitch": 0.6403147491024335,
          "rotation": 0,
          "target": "0-acceso-calle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.821987645357046,
          "pitch": -0.2651214719285804,
          "title": "Casa 1: 130 m2",
          "text": "Cuenta con un lugar de estacionamiento"
        }
      ]
    },
    {
      "id": "2-recibidor-casa1",
      "name": "Recibidor-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.35691975435560863,
        "pitch": 0.4396783888239071,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0732561012614159,
          "pitch": 0.5857795991850683,
          "rotation": 0,
          "target": "4-estancia-casa1"
        },
        {
          "yaw": -1.4135933316198361,
          "pitch": 0.6406783414064652,
          "rotation": 0,
          "target": "3-baopb-casa1"
        },
        {
          "yaw": -2.3625537848947857,
          "pitch": 0.707284110286361,
          "rotation": 4.71238898038469,
          "target": "6-distribuidorpa-casa1"
        },
        {
          "yaw": 3.0457478518997974,
          "pitch": 0.4850585323537011,
          "rotation": 0,
          "target": "1-acceso-condominio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2256805190029887,
          "pitch": -0.2294800257462768,
          "title": "Planta Baja (PB)",
          "text": "Recibidor, estancia, cocina y un medio baño"
        }
      ]
    },
    {
      "id": "3-baopb-casa1",
      "name": "BañoPB-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.12282825923488261,
        "pitch": 0.5209887757981839,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.171454105502626,
          "pitch": 1.1390601853877342,
          "rotation": 0,
          "target": "5-cocina-casa1"
        },
        {
          "yaw": -1.6428505789861383,
          "pitch": 0.6365400494062623,
          "rotation": 0,
          "target": "2-recibidor-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-estancia-casa1",
      "name": "Estancia-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.4120351525215504,
        "pitch": 0.3134107996075457,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8103466354321291,
          "pitch": 0.5769816743360785,
          "rotation": 6.283185307179586,
          "target": "5-cocina-casa1"
        },
        {
          "yaw": -2.2961127106199317,
          "pitch": 0.30078612935389515,
          "rotation": 0,
          "target": "2-recibidor-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cocina-casa1",
      "name": "Cocina-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.18423817773607354,
        "pitch": 0.1325058158099388,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.801708757211806,
          "pitch": 0.7455098577113226,
          "rotation": 1.5707963267948966,
          "target": "3-baopb-casa1"
        },
        {
          "yaw": 2.913731342690232,
          "pitch": 0.3249265192515818,
          "rotation": 0,
          "target": "2-recibidor-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-distribuidorpa-casa1",
      "name": "DistribuidorPA-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.018541285940543162,
        "pitch": 0.4517243720793722,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2886556148574435,
          "pitch": 0.697493314717148,
          "rotation": 0,
          "target": "9-recmara2-casa1"
        },
        {
          "yaw": -0.41962784566961986,
          "pitch": 0.7527212052333976,
          "rotation": 0,
          "target": "8-recmara1-casa1"
        },
        {
          "yaw": 1.0064450851217828,
          "pitch": 0.7802132365309102,
          "rotation": 1.5707963267948966,
          "target": "10-recmara3-casa1"
        },
        {
          "yaw": -1.6705675831838018,
          "pitch": 0.8309348528852496,
          "rotation": 0,
          "target": "7-baopa-casa1"
        },
        {
          "yaw": 2.6861759842288,
          "pitch": 0.9180687077201242,
          "rotation": 0,
          "target": "11-cuartoservicio-casa1"
        },
        {
          "yaw": -2.7389721009562535,
          "pitch": 0.8316724648995795,
          "rotation": 0,
          "target": "2-recibidor-casa1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8157822422415144,
          "pitch": -0.038575949373248264,
          "title": "Planta Alta (PA):",
          "text": "3 Recámaras, un baño completo"
        }
      ]
    },
    {
      "id": "7-baopa-casa1",
      "name": "BañoPA-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.42879102799955504,
        "pitch": 0.584445435371979,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.872075475679173,
          "pitch": 0.782249062558618,
          "rotation": 0,
          "target": "6-distribuidorpa-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-recmara1-casa1",
      "name": "Recámara1-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.5412443938083022,
        "pitch": 0.34632201859418466,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0445569225910933,
          "pitch": 0.36502763225946744,
          "rotation": 0,
          "target": "6-distribuidorpa-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-recmara2-casa1",
      "name": "Recámara2-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.9748479446471894,
        "pitch": 0.18269563811071876,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4187081650319175,
          "pitch": 0.5724950783445006,
          "rotation": 5.497787143782138,
          "target": "6-distribuidorpa-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-recmara3-casa1",
      "name": "Recámara3-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.5746420348774492,
        "pitch": 0.29813808557237564,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.647480367764487,
          "pitch": 0.7545178355164595,
          "rotation": 4.71238898038469,
          "target": "6-distribuidorpa-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cuartoservicio-casa1",
      "name": "CuartoServicio-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.4380114579618244,
        "pitch": 0.23490811762065533,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10027567529478887,
          "pitch": 0.606364853256192,
          "rotation": 0,
          "target": "12-baoservicio-casa1"
        },
        {
          "yaw": -1.418142130563048,
          "pitch": 0.7999885289278108,
          "rotation": 0,
          "target": "6-distribuidorpa-casa1"
        },
        {
          "yaw": -2.699391713143463,
          "pitch": 0.5432905842272255,
          "rotation": 0,
          "target": "13-patioservicio-casa1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1742877692940823,
          "pitch": -0.2781025029817563,
          "title": "Cuarto de Servicio",
          "text": "Baño completo y acceso a patio de servicio"
        }
      ]
    },
    {
      "id": "12-baoservicio-casa1",
      "name": "BañoServicio-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.1460126267818378,
        "pitch": 0.8429758630682187,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.415976846848997,
          "pitch": 1.1490416168853024,
          "rotation": 0.7853981633974483,
          "target": "11-cuartoservicio-casa1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-patioservicio-casa1",
      "name": "PatioServicio-Casa1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.3916846654941395,
        "pitch": 0.5782071962615802,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9786046892343965,
          "pitch": 0.9273797310726586,
          "rotation": 0,
          "target": "11-cuartoservicio-casa1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
