window.BENCHMARK_DATA = {
  "lastUpdate": 1772859521597,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.8)": [
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "513701dab90bb14a1f7d5e5e17f2e3f56191b915",
          "message": "chore(workflows): Update benchmark.yml and add index page generation\n\nUpdate benchmark.yml to improve auto-push logic and add a new workflow step to generate an index page for the benchmarks.\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:34:21+08:00",
          "tree_id": "856183d03a263638286260630f9c521986018bca",
          "url": "https://github.com/loonghao/transx/commit/513701dab90bb14a1f7d5e5e17f2e3f56191b915"
        },
        "date": 1734017734777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2965.02144788085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001958987394281162",
            "extra": "mean: 337.2656884875881 usec\nrounds: 886"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 70925.95107067627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034737858469772425",
            "extra": "mean: 14.099211711712124 usec\nrounds: 1776"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 65083.58087225453,
            "unit": "iter/sec",
            "range": "stddev: 0.000005003746635376983",
            "extra": "mean: 15.364858334436008 usec\nrounds: 30212"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 67430.61687854429,
            "unit": "iter/sec",
            "range": "stddev: 0.000001613080789763652",
            "extra": "mean: 14.830058603811906 usec\nrounds: 31056"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 953245.7050609367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010342186115980555",
            "extra": "mean: 1.0490474750537424 usec\nrounds: 3307"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 71215.47101070888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021974345801971054",
            "extra": "mean: 14.041892664722068 usec\nrounds: 33223"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 758.7508670160145,
            "unit": "iter/sec",
            "range": "stddev: 0.00012022095711926138",
            "extra": "mean: 1.3179556603773785 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2245.1147443302098,
            "unit": "iter/sec",
            "range": "stddev: 0.000046757070196559814",
            "extra": "mean: 445.4115329852917 usec\nrounds: 2107"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 60997.69300869721,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019144795181426692",
            "extra": "mean: 16.394062638687295 usec\nrounds: 31546"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17751.952722139933,
            "unit": "iter/sec",
            "range": "stddev: 0.00002043765702532472",
            "extra": "mean: 56.331830962619506 usec\nrounds: 12092"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1660.025571305565,
            "unit": "iter/sec",
            "range": "stddev: 0.000055136682238956655",
            "extra": "mean: 602.4003589375596 usec\nrounds: 1393"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "40a480d4c7ec571c8fccc07ce06394a33a4482db",
          "message": "tests(tests/benchmarks): Add new performance benchmarks for translation operations\n\n- Added benchmarks for translation with nested parameters\n- Added benchmarks for translation with large number of parameters\n- Added benchmarks for frequent locale switches\n- Added benchmarks for memory usage with large number of translations\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-12T23:49:00+08:00",
          "tree_id": "2f3177db43da8ad71aea4f0fc23e07eeaeb8b095",
          "url": "https://github.com/loonghao/transx/commit/40a480d4c7ec571c8fccc07ce06394a33a4482db"
        },
        "date": 1734018616280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2638.8402870599352,
            "unit": "iter/sec",
            "range": "stddev: 0.00037176309448469486",
            "extra": "mean: 378.95434782608623 usec\nrounds: 690"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 69462.12314072535,
            "unit": "iter/sec",
            "range": "stddev: 0.000004987846360303736",
            "extra": "mean: 14.396335078530075 usec\nrounds: 1528"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 67949.7522562906,
            "unit": "iter/sec",
            "range": "stddev: 0.000003546626504278565",
            "extra": "mean: 14.716757115290626 usec\nrounds: 16584"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 68792.21620101578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025908547000470875",
            "extra": "mean: 14.536528334512852 usec\nrounds: 25446"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 974586.8025360578,
            "unit": "iter/sec",
            "range": "stddev: 2.1059848054387343e-7",
            "extra": "mean: 1.0260758686633273 usec\nrounds: 3137"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 71295.2772860077,
            "unit": "iter/sec",
            "range": "stddev: 0.000003199462305383259",
            "extra": "mean: 14.026174496641707 usec\nrounds: 15198"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 755.4188833341027,
            "unit": "iter/sec",
            "range": "stddev: 0.00015124183738293915",
            "extra": "mean: 1.323768867924533 msec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 682.6600341720731,
            "unit": "iter/sec",
            "range": "stddev: 0.00011020578514526565",
            "extra": "mean: 1.4648579819277032 msec\nrounds: 664"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 50782.70203595496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032224447999361157",
            "extra": "mean: 19.691744627766838 usec\nrounds: 17637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 902.3992349644366,
            "unit": "iter/sec",
            "range": "stddev: 0.00005650663326059663",
            "extra": "mean: 1.1081569678407472 msec\nrounds: 653"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1571.6184202924264,
            "unit": "iter/sec",
            "range": "stddev: 0.00008969871991561246",
            "extra": "mean: 636.2867647058584 usec\nrounds: 1360"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 70111.59563128199,
            "unit": "iter/sec",
            "range": "stddev: 0.000004915517463065421",
            "extra": "mean: 14.262975917122413 usec\nrounds: 37454"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 51246.83085239518,
            "unit": "iter/sec",
            "range": "stddev: 0.00004136834651752149",
            "extra": "mean: 19.513401772692486 usec\nrounds: 17826"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 35616.08061395751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072767189970002595",
            "extra": "mean: 28.07720509280609 usec\nrounds: 13038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 681.5932231538267,
            "unit": "iter/sec",
            "range": "stddev: 0.000281488582210963",
            "extra": "mean: 1.4671507374631176 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 75.65802050170963,
            "unit": "iter/sec",
            "range": "stddev: 0.00033160350631159126",
            "extra": "mean: 13.217369333333314 msec\nrounds: 75"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "c129133837fd64ccc614941f230af18bfc467074",
          "message": "refactor(core): Add translation and parameter caching for improved performance\n\nSigned-off-by: longhao <hal.long@outlook.com>",
          "timestamp": "2024-12-13T00:21:43+08:00",
          "tree_id": "59f62ae9aedac103ec3c56e3f2d1bb54bb077a89",
          "url": "https://github.com/loonghao/transx/commit/c129133837fd64ccc614941f230af18bfc467074"
        },
        "date": 1734020568903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2929.456477120324,
            "unit": "iter/sec",
            "range": "stddev: 0.00020336316376809533",
            "extra": "mean: 341.36025157233496 usec\nrounds: 795"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1304810.9355618148,
            "unit": "iter/sec",
            "range": "stddev: 6.454475418896157e-8",
            "extra": "mean: 766.3945578210748 nsec\nrounds: 1470"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 512395.3436956238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029313007749569235",
            "extra": "mean: 1.9516180470875357 usec\nrounds: 21322"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 447250.9104808818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026851619173805206",
            "extra": "mean: 2.2358814181614637 usec\nrounds: 18249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 884560.1582183767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012906053909622695",
            "extra": "mean: 1.1305053598775403 usec\nrounds: 3265"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1296237.5527533623,
            "unit": "iter/sec",
            "range": "stddev: 2.9933005267432044e-7",
            "extra": "mean: 771.4635314151186 nsec\nrounds: 18797"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19633.87072543821,
            "unit": "iter/sec",
            "range": "stddev: 0.000004623976322348186",
            "extra": "mean: 50.93239198648544 usec\nrounds: 8286"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5499.867236686243,
            "unit": "iter/sec",
            "range": "stddev: 0.00003414962403474506",
            "extra": "mean: 181.82257079400264 usec\nrounds: 3602"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1305898.6413021458,
            "unit": "iter/sec",
            "range": "stddev: 6.071181722456707e-8",
            "extra": "mean: 765.7562144355046 nsec\nrounds: 16695"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11410.356698733147,
            "unit": "iter/sec",
            "range": "stddev: 0.000015848123741138346",
            "extra": "mean: 87.63967914438877 usec\nrounds: 1870"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1624.8246309967244,
            "unit": "iter/sec",
            "range": "stddev: 0.00009268138351652748",
            "extra": "mean: 615.4510344827582 usec\nrounds: 1305"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1651587.968470839,
            "unit": "iter/sec",
            "range": "stddev: 7.721564583877041e-8",
            "extra": "mean: 605.4778910298626 nsec\nrounds: 80646"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 208205.38621633744,
            "unit": "iter/sec",
            "range": "stddev: 0.000005783865359296973",
            "extra": "mean: 4.802949713130582 usec\nrounds: 14815"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55809.65548588768,
            "unit": "iter/sec",
            "range": "stddev: 0.000006087400071877449",
            "extra": "mean: 17.91804646156372 usec\nrounds: 11149"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11096.672028589437,
            "unit": "iter/sec",
            "range": "stddev: 0.000008292871969011698",
            "extra": "mean: 90.1171087532913 usec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1779.331451380057,
            "unit": "iter/sec",
            "range": "stddev: 0.000020992890787006815",
            "extra": "mean: 562.0088372092764 usec\nrounds: 215"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "13c0565f3998741304d99a38c46f4a06bb1004e5",
          "message": "bump: version 0.6.0 → 0.6.1",
          "timestamp": "2024-12-12T16:22:08Z",
          "tree_id": "09ee9a0219ba87c70c96c5fc0f17b3cadc5bb0d4",
          "url": "https://github.com/loonghao/transx/commit/13c0565f3998741304d99a38c46f4a06bb1004e5"
        },
        "date": 1734020598127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2913.7339771709903,
            "unit": "iter/sec",
            "range": "stddev: 0.00020296467983500028",
            "extra": "mean: 343.2022304832792 usec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1321673.8540186493,
            "unit": "iter/sec",
            "range": "stddev: 6.991552753513875e-8",
            "extra": "mean: 756.6163141984116 nsec\nrounds: 1655"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 515547.09891860356,
            "unit": "iter/sec",
            "range": "stddev: 0.000003166711203250224",
            "extra": "mean: 1.9396869890211208 usec\nrounds: 17124"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 307083.2718146999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037259947390181617",
            "extra": "mean: 3.2564456998602633 usec\nrounds: 16639"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 970435.299362023,
            "unit": "iter/sec",
            "range": "stddev: 5.980748233749622e-8",
            "extra": "mean: 1.0304654011013543 usec\nrounds: 3266"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1336336.0203170031,
            "unit": "iter/sec",
            "range": "stddev: 2.488220692448368e-7",
            "extra": "mean: 748.3147837044621 nsec\nrounds: 19048"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19605.844243895914,
            "unit": "iter/sec",
            "range": "stddev: 0.000023639418990607253",
            "extra": "mean: 51.00519965169774 usec\nrounds: 8039"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5449.107611374825,
            "unit": "iter/sec",
            "range": "stddev: 0.00003471019198582015",
            "extra": "mean: 183.51628767846947 usec\nrounds: 1891"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1235171.8403560405,
            "unit": "iter/sec",
            "range": "stddev: 6.358277309500913e-7",
            "extra": "mean: 809.6039492867229 nsec\nrounds: 17826"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11632.969810596049,
            "unit": "iter/sec",
            "range": "stddev: 0.000014857182236504518",
            "extra": "mean: 85.96257157730578 usec\nrounds: 1921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1614.394867146858,
            "unit": "iter/sec",
            "range": "stddev: 0.00007148081796151827",
            "extra": "mean: 619.4271428571336 usec\nrounds: 1330"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1692231.9343707627,
            "unit": "iter/sec",
            "range": "stddev: 1.0534074324678805e-7",
            "extra": "mean: 590.9355447610017 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 213027.31207998988,
            "unit": "iter/sec",
            "range": "stddev: 0.000007157721695026355",
            "extra": "mean: 4.69423375921163 usec\nrounds: 14793"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55922.89402360661,
            "unit": "iter/sec",
            "range": "stddev: 0.000006169145441195572",
            "extra": "mean: 17.881764122898794 usec\nrounds: 11099"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11490.677863600937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051735592783147775",
            "extra": "mean: 87.02706766914976 usec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1832.0973553426631,
            "unit": "iter/sec",
            "range": "stddev: 0.00003633696293110709",
            "extra": "mean: 545.8225225225364 usec\nrounds: 222"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "b34e1d3a8548ad61d289ccfd214dca1afb825792",
          "message": "bump: version 0.6.1 → 0.7.0",
          "timestamp": "2026-03-03T01:27:23Z",
          "tree_id": "ae710064456900b164f8e955ce29140683edb0a4",
          "url": "https://github.com/loonghao/transx/commit/b34e1d3a8548ad61d289ccfd214dca1afb825792"
        },
        "date": 1772501326493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2612.520611485118,
            "unit": "iter/sec",
            "range": "stddev: 0.00017892434197652027",
            "extra": "mean: 382.77209971236863 usec\nrounds: 1043"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1129442.4519075085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011009266704931177",
            "extra": "mean: 885.392609699685 nsec\nrounds: 1732"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 495741.9822431295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028871067507065313",
            "extra": "mean: 2.0171783625732234 usec\nrounds: 23256"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 445049.0658031017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027798820337388213",
            "extra": "mean: 2.2469432627512114 usec\nrounds: 20921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 932959.3937401,
            "unit": "iter/sec",
            "range": "stddev: 5.360883850115289e-7",
            "extra": "mean: 1.0718580108734892 usec\nrounds: 3127"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1300373.9094303877,
            "unit": "iter/sec",
            "range": "stddev: 5.615265427376791e-7",
            "extra": "mean: 769.0095846647964 nsec\nrounds: 28170"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19566.131068755138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063595694056592685",
            "extra": "mean: 51.1087243812286 usec\nrounds: 8929"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5435.1070604155875,
            "unit": "iter/sec",
            "range": "stddev: 0.000029390542690683507",
            "extra": "mean: 183.98901601830386 usec\nrounds: 3059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1293816.5803742015,
            "unit": "iter/sec",
            "range": "stddev: 4.2513422287450393e-7",
            "extra": "mean: 772.9070837156663 nsec\nrounds: 17392"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11277.427140763573,
            "unit": "iter/sec",
            "range": "stddev: 0.000014884906515996627",
            "extra": "mean: 88.6727076591241 usec\nrounds: 1854"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1450.7403343073183,
            "unit": "iter/sec",
            "range": "stddev: 0.00006130703522699947",
            "extra": "mean: 689.3032311516091 usec\nrounds: 1207"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1631117.8119640627,
            "unit": "iter/sec",
            "range": "stddev: 1.9906276973669224e-7",
            "extra": "mean: 613.0765004622565 nsec\nrounds: 149254"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 204993.28358899493,
            "unit": "iter/sec",
            "range": "stddev: 0.000008029486650646375",
            "extra": "mean: 4.878208605141271 usec\nrounds: 13643"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55672.15856953206,
            "unit": "iter/sec",
            "range": "stddev: 0.000004588186201427814",
            "extra": "mean: 17.962299750799932 usec\nrounds: 11236"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11044.433838165096,
            "unit": "iter/sec",
            "range": "stddev: 0.000008788659331748986",
            "extra": "mean: 90.54334650857379 usec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1787.157200380207,
            "unit": "iter/sec",
            "range": "stddev: 0.00004955452247586877",
            "extra": "mean: 559.5478672985544 usec\nrounds: 211"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "5c332e1d5ae462437c64289535606d7a687943e3",
          "message": "feat: improve custom keyword extraction and gettext output stability",
          "timestamp": "2026-03-03T09:26:42+08:00",
          "tree_id": "00f4037f0df04d43e7da3ba37dcc021ce83ecdce",
          "url": "https://github.com/loonghao/transx/commit/5c332e1d5ae462437c64289535606d7a687943e3"
        },
        "date": 1772501342093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2591.3766850600136,
            "unit": "iter/sec",
            "range": "stddev: 0.0001769234544777588",
            "extra": "mean: 385.89526785714713 usec\nrounds: 1120"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1207541.2901254536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010104788522177072",
            "extra": "mean: 828.1290322553758 nsec\nrounds: 1550"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 485322.5461791386,
            "unit": "iter/sec",
            "range": "stddev: 0.00000363553834258775",
            "extra": "mean: 2.0604853573624986 usec\nrounds: 19532"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 433062.30400694156,
            "unit": "iter/sec",
            "range": "stddev: 0.000002826722556450593",
            "extra": "mean: 2.309136562447077 usec\nrounds: 18519"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 844459.9126721502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010104426214062713",
            "extra": "mean: 1.1841888347733047 usec\nrounds: 2669"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1240801.3457736345,
            "unit": "iter/sec",
            "range": "stddev: 4.808688523581588e-7",
            "extra": "mean: 805.9307828816902 nsec\nrounds: 20284"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 18669.124820371235,
            "unit": "iter/sec",
            "range": "stddev: 0.000007963897996204979",
            "extra": "mean: 53.56437485001051 usec\nrounds: 8334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5340.748048754019,
            "unit": "iter/sec",
            "range": "stddev: 0.00003069863883801978",
            "extra": "mean: 187.2396883116958 usec\nrounds: 3850"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1258997.923008526,
            "unit": "iter/sec",
            "range": "stddev: 3.8614496967006163e-7",
            "extra": "mean: 794.2824858760533 nsec\nrounds: 17700"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11015.32149376336,
            "unit": "iter/sec",
            "range": "stddev: 0.000015242044214603755",
            "extra": "mean: 90.78264311814945 usec\nrounds: 1642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1421.3293024530974,
            "unit": "iter/sec",
            "range": "stddev: 0.00007538733487528458",
            "extra": "mean: 703.5667232597558 usec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1598086.8772229117,
            "unit": "iter/sec",
            "range": "stddev: 1.403416998266552e-7",
            "extra": "mean: 625.748208218754 nsec\nrounds: 80646"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 202989.95320166645,
            "unit": "iter/sec",
            "range": "stddev: 0.000006319378819815387",
            "extra": "mean: 4.926352187521911 usec\nrounds: 13737"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54233.057696942844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043696033450165885",
            "extra": "mean: 18.43893821344266 usec\nrounds: 11038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10779.595214030967,
            "unit": "iter/sec",
            "range": "stddev: 0.000007402391636368055",
            "extra": "mean: 92.76786188579486 usec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1709.1298998245145,
            "unit": "iter/sec",
            "range": "stddev: 0.00004648036091990734",
            "extra": "mean: 585.0930348258933 usec\nrounds: 201"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "longhao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "35ecc9f8bbf591d9d84f0b3b5dd64ae23fce8577",
          "message": "fix: resolve remaining isort and ruff lint errors",
          "timestamp": "2026-03-07T12:51:52+08:00",
          "tree_id": "9f44ff474bd609e02e2efd626b79c7f04028f99e",
          "url": "https://github.com/loonghao/transx/commit/35ecc9f8bbf591d9d84f0b3b5dd64ae23fce8577"
        },
        "date": 1772859197990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2464.903413946704,
            "unit": "iter/sec",
            "range": "stddev: 0.00017467076857139336",
            "extra": "mean: 405.6954095409525 usec\nrounds: 1111"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1277417.3617571907,
            "unit": "iter/sec",
            "range": "stddev: 7.482071161352407e-7",
            "extra": "mean: 782.829504230645 nsec\nrounds: 1654"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 505870.2882362905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027180098788985377",
            "extra": "mean: 1.9767913302172495 usec\nrounds: 23530"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 450386.82926249824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027558656732955332",
            "extra": "mean: 2.2203135949545527 usec\nrounds: 22832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 940826.6999139293,
            "unit": "iter/sec",
            "range": "stddev: 6.844857777379765e-7",
            "extra": "mean: 1.0628950050965646 usec\nrounds: 2943"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1289681.9127662694,
            "unit": "iter/sec",
            "range": "stddev: 3.332988232802481e-7",
            "extra": "mean: 775.3849923002148 nsec\nrounds: 28572"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19323.89189048169,
            "unit": "iter/sec",
            "range": "stddev: 0.000006915695388024099",
            "extra": "mean: 51.749409780778535 usec\nrounds: 9488"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5426.534181386114,
            "unit": "iter/sec",
            "range": "stddev: 0.000033383059938061196",
            "extra": "mean: 184.27968323320636 usec\nrounds: 1831"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1299925.2056830255,
            "unit": "iter/sec",
            "range": "stddev: 5.187825991442861e-7",
            "extra": "mean: 769.2750287694942 nsec\nrounds: 18249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11346.930221338862,
            "unit": "iter/sec",
            "range": "stddev: 0.000016046594106604182",
            "extra": "mean: 88.12956284153536 usec\nrounds: 1830"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1357.102686777823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000659475704564395",
            "extra": "mean: 736.8639158576173 usec\nrounds: 1236"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1636160.6311280874,
            "unit": "iter/sec",
            "range": "stddev: 2.0202627501594725e-7",
            "extra": "mean: 611.1869342017411 nsec\nrounds: 144928"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 206681.7705432713,
            "unit": "iter/sec",
            "range": "stddev: 0.000007354686442108875",
            "extra": "mean: 4.838356074517168 usec\nrounds: 15244"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54839.84280004889,
            "unit": "iter/sec",
            "range": "stddev: 0.000004200183741028042",
            "extra": "mean: 18.234917332751884 usec\nrounds: 9133"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10409.532940693813,
            "unit": "iter/sec",
            "range": "stddev: 0.000020131250836563893",
            "extra": "mean: 96.06578947367723 usec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1781.5653748684515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004179430353244467",
            "extra": "mean: 561.3041284403266 usec\nrounds: 218"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "distinct": true,
          "id": "bcde35145ee83857bf73d6ba8c336294c3d8eb92",
          "message": "bump: version 0.7.0 → 0.8.0",
          "timestamp": "2026-03-07T04:52:13Z",
          "tree_id": "9ee97693543466938cef98964b718e3ea941944b",
          "url": "https://github.com/loonghao/transx/commit/bcde35145ee83857bf73d6ba8c336294c3d8eb92"
        },
        "date": 1772859215220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2465.9407143619906,
            "unit": "iter/sec",
            "range": "stddev: 0.00017968429734308307",
            "extra": "mean: 405.5247533632326 usec\nrounds: 1115"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1271667.6628841474,
            "unit": "iter/sec",
            "range": "stddev: 8.290804211076547e-7",
            "extra": "mean: 786.3689776714114 nsec\nrounds: 1702"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 503671.8872767679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029079384701645558",
            "extra": "mean: 1.9854195266024437 usec\nrounds: 24039"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 441192.1582661037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028485996807812336",
            "extra": "mean: 2.2665860697298545 usec\nrounds: 25642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 937898.6236998367,
            "unit": "iter/sec",
            "range": "stddev: 8.357759840282924e-7",
            "extra": "mean: 1.0662133142441184 usec\nrounds: 2794"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1293886.8296930923,
            "unit": "iter/sec",
            "range": "stddev: 4.4647653956916686e-7",
            "extra": "mean: 772.8651200794726 nsec\nrounds: 22027"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19240.72650329457,
            "unit": "iter/sec",
            "range": "stddev: 0.000009961109882231354",
            "extra": "mean: 51.97308946877713 usec\nrounds: 8584"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5254.976368322656,
            "unit": "iter/sec",
            "range": "stddev: 0.00004408854231572004",
            "extra": "mean: 190.2958129418176 usec\nrounds: 1839"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1272658.4249031215,
            "unit": "iter/sec",
            "range": "stddev: 5.304746529490978e-7",
            "extra": "mean: 785.7567910070786 nsec\nrounds: 18149"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10965.690898225605,
            "unit": "iter/sec",
            "range": "stddev: 0.000016564646032433877",
            "extra": "mean: 91.19352435529743 usec\nrounds: 1745"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1357.0818643479054,
            "unit": "iter/sec",
            "range": "stddev: 0.00006493640177665748",
            "extra": "mean: 736.8752219531813 usec\nrounds: 1239"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1706304.119826834,
            "unit": "iter/sec",
            "range": "stddev: 1.4084472114449411e-7",
            "extra": "mean: 586.061997026384 nsec\nrounds: 84746"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 204234.0299115605,
            "unit": "iter/sec",
            "range": "stddev: 0.000005967028656381464",
            "extra": "mean: 4.896343672173684 usec\nrounds: 8834"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55946.77568898688,
            "unit": "iter/sec",
            "range": "stddev: 0.000004142392357594266",
            "extra": "mean: 17.874131041243363 usec\nrounds: 13263"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10994.278721323828,
            "unit": "iter/sec",
            "range": "stddev: 0.00002037609980703389",
            "extra": "mean: 90.95639880954276 usec\nrounds: 672"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1642.521854882121,
            "unit": "iter/sec",
            "range": "stddev: 0.0001209719718895375",
            "extra": "mean: 608.8199052132351 usec\nrounds: 211"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "4d153c5637e1c06a28611af0c6b117bfa3d9da4b",
          "message": "chore(deps): update actions/setup-python action to v6",
          "timestamp": "2026-03-07T12:56:48+08:00",
          "tree_id": "215077217c75f99000d7fb8a7cd946488234dc2c",
          "url": "https://github.com/loonghao/transx/commit/4d153c5637e1c06a28611af0c6b117bfa3d9da4b"
        },
        "date": 1772859491616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2391.808274977423,
            "unit": "iter/sec",
            "range": "stddev: 0.00024069608096496898",
            "extra": "mean: 418.09371196754444 usec\nrounds: 986"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1255598.6861723794,
            "unit": "iter/sec",
            "range": "stddev: 8.512085389240255e-7",
            "extra": "mean: 796.4328180753698 nsec\nrounds: 1682"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 493357.0130562878,
            "unit": "iter/sec",
            "range": "stddev: 0.000003141038158983968",
            "extra": "mean: 2.026929735538002 usec\nrounds: 16751"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 429352.5738503987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031707942562640504",
            "extra": "mean: 2.3290881688028136 usec\nrounds: 15924"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 964977.5133692165,
            "unit": "iter/sec",
            "range": "stddev: 5.155085897873172e-7",
            "extra": "mean: 1.0362935779803848 usec\nrounds: 2725"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1309940.7590581626,
            "unit": "iter/sec",
            "range": "stddev: 3.038172898248513e-7",
            "extra": "mean: 763.393300868806 nsec\nrounds: 10061"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19310.41355451289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075648431540590564",
            "extra": "mean: 51.785529977233324 usec\nrounds: 7906"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5416.128535020922,
            "unit": "iter/sec",
            "range": "stddev: 0.00003115051630252714",
            "extra": "mean: 184.63372749260967 usec\nrounds: 3721"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1304691.5766667495,
            "unit": "iter/sec",
            "range": "stddev: 5.544516336696196e-7",
            "extra": "mean: 766.464670949144 nsec\nrounds: 16502"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11395.239668764616,
            "unit": "iter/sec",
            "range": "stddev: 0.000017514763755371842",
            "extra": "mean: 87.75594275047067 usec\nrounds: 1607"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1339.8508901046296,
            "unit": "iter/sec",
            "range": "stddev: 0.00006911680378844999",
            "extra": "mean: 746.351707779893 usec\nrounds: 1054"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1664483.0156655998,
            "unit": "iter/sec",
            "range": "stddev: 2.5757808339375114e-7",
            "extra": "mean: 600.7871456706534 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 204896.6324837006,
            "unit": "iter/sec",
            "range": "stddev: 0.000010041666068876151",
            "extra": "mean: 4.880509688608716 usec\nrounds: 13263"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55409.74251897445,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071336807398137756",
            "extra": "mean: 18.047367746882436 usec\nrounds: 7807"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10868.568490774085,
            "unit": "iter/sec",
            "range": "stddev: 0.000013739407833289462",
            "extra": "mean: 92.00843706775754 usec\nrounds: 723"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1795.2843292293298,
            "unit": "iter/sec",
            "range": "stddev: 0.00003511806487924615",
            "extra": "mean: 557.0148325358996 usec\nrounds: 209"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "27a3699cfb8a999c695ca743a518056689446b8a",
          "message": "chore(deps): update dependency ubuntu to v24",
          "timestamp": "2026-03-07T12:57:17+08:00",
          "tree_id": "b47fb15a48da1273424894c8d0b6d8d6884ffbbd",
          "url": "https://github.com/loonghao/transx/commit/27a3699cfb8a999c695ca743a518056689446b8a"
        },
        "date": 1772859520146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2453.0190121045143,
            "unit": "iter/sec",
            "range": "stddev: 0.00018864600549153666",
            "extra": "mean: 407.66092519685435 usec\nrounds: 1016"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1266144.2461164969,
            "unit": "iter/sec",
            "range": "stddev: 6.33985152077354e-7",
            "extra": "mean: 789.7994269351132 nsec\nrounds: 1745"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 505534.38130466174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029043247040823724",
            "extra": "mean: 1.978104827250804 usec\nrounds: 24631"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 437549.7795134515,
            "unit": "iter/sec",
            "range": "stddev: 0.000003970044604996258",
            "extra": "mean: 2.2854542427423556 usec\nrounds: 18019"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 919200.8042211253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011836307630134959",
            "extra": "mean: 1.0879015721133307 usec\nrounds: 2926"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1269604.6240592399,
            "unit": "iter/sec",
            "range": "stddev: 5.308031208895715e-7",
            "extra": "mean: 787.6467847153492 nsec\nrounds: 21460"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 18951.199858367396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053813631428368425",
            "extra": "mean: 52.76710749047779 usec\nrounds: 9452"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5425.911144494507,
            "unit": "iter/sec",
            "range": "stddev: 0.00003769118032955903",
            "extra": "mean: 184.3008433734981 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1258689.7211493924,
            "unit": "iter/sec",
            "range": "stddev: 5.483024353056677e-7",
            "extra": "mean: 794.4769733138316 nsec\nrounds: 17762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11133.379278600345,
            "unit": "iter/sec",
            "range": "stddev: 0.00002127380112892001",
            "extra": "mean: 89.81998861047667 usec\nrounds: 1756"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1350.6389343181056,
            "unit": "iter/sec",
            "range": "stddev: 0.00006776799666226445",
            "extra": "mean: 740.390325342478 usec\nrounds: 1168"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1649527.1854751925,
            "unit": "iter/sec",
            "range": "stddev: 1.9439174211166324e-7",
            "extra": "mean: 606.234325087832 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 209143.61299953682,
            "unit": "iter/sec",
            "range": "stddev: 0.000007103662739611164",
            "extra": "mean: 4.781403484706055 usec\nrounds: 14578"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55593.58620614288,
            "unit": "iter/sec",
            "range": "stddev: 0.000004683065933568558",
            "extra": "mean: 17.987686498438265 usec\nrounds: 10858"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11123.554809267604,
            "unit": "iter/sec",
            "range": "stddev: 0.000007156406002656275",
            "extra": "mean: 89.89931880111283 usec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1785.7735077949808,
            "unit": "iter/sec",
            "range": "stddev: 0.000016195107887262532",
            "extra": "mean: 559.9814285714036 usec\nrounds: 210"
          }
        ]
      }
    ]
  }
}