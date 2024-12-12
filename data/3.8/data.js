window.BENCHMARK_DATA = {
  "lastUpdate": 1734020578825,
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
      }
    ]
  }
}