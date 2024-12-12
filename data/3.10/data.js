window.BENCHMARK_DATA = {
  "lastUpdate": 1734020636723,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.10)": [
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
        "date": 1734017731960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2981.734513813977,
            "unit": "iter/sec",
            "range": "stddev: 0.0002116360892390977",
            "extra": "mean: 335.37526408442255 usec\nrounds: 1136"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 73184.50220807179,
            "unit": "iter/sec",
            "range": "stddev: 9.75613111162665e-7",
            "extra": "mean: 13.664095127092443 usec\nrounds: 1724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 68332.04933475985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017935656559305488",
            "extra": "mean: 14.634421325503984 usec\nrounds: 29412"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 68017.50583809537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038653194652406885",
            "extra": "mean: 14.702097462678765 usec\nrounds: 31848"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 988951.7652542533,
            "unit": "iter/sec",
            "range": "stddev: 4.909408767405824e-7",
            "extra": "mean: 1.0111716618887943 usec\nrounds: 3303"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 74034.42976070386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019894036357948084",
            "extra": "mean: 13.507229045083859 usec\nrounds: 28012"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 762.0419459729139,
            "unit": "iter/sec",
            "range": "stddev: 0.00013500800039068455",
            "extra": "mean: 1.3122637215504986 msec\nrounds: 747"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2281.129220612007,
            "unit": "iter/sec",
            "range": "stddev: 0.000033832804336505424",
            "extra": "mean: 438.37937411178694 usec\nrounds: 2109"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 61829.26733710745,
            "unit": "iter/sec",
            "range": "stddev: 0.000004314302436028739",
            "extra": "mean: 16.173570269687477 usec\nrounds: 19724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17911.311301436923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062518324005113095",
            "extra": "mean: 55.83064149634738 usec\nrounds: 11442"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1648.8076993588547,
            "unit": "iter/sec",
            "range": "stddev: 0.00006471534910731712",
            "extra": "mean: 606.4988660526354 usec\nrounds: 1411"
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
        "date": 1734018613270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2852.0264891521915,
            "unit": "iter/sec",
            "range": "stddev: 0.00021306011604006723",
            "extra": "mean: 350.6278794406518 usec\nrounds: 929"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 71649.63936472769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014596328777190025",
            "extra": "mean: 13.956804372867351 usec\nrounds: 1646"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 66234.14046642544,
            "unit": "iter/sec",
            "range": "stddev: 0.00000873467728550747",
            "extra": "mean: 15.097953909538651 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 67375.41171122702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027303722518808566",
            "extra": "mean: 14.842209859674465 usec\nrounds: 27323"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 982425.4658396746,
            "unit": "iter/sec",
            "range": "stddev: 7.652294708059108e-7",
            "extra": "mean: 1.0178889236602846 usec\nrounds: 3259"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 71190.080689892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024445868470111377",
            "extra": "mean: 14.04690078040586 usec\nrounds: 31153"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 743.0155193200043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001512542584680256",
            "extra": "mean: 1.345866908560919 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 630.2981054372095,
            "unit": "iter/sec",
            "range": "stddev: 0.0002844215932729762",
            "extra": "mean: 1.5865508580362062 msec\nrounds: 641"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 49000.16987881441,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036335561927658645",
            "extra": "mean: 20.408092512192646 usec\nrounds: 21835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 874.475466773429,
            "unit": "iter/sec",
            "range": "stddev: 0.00009503330850435684",
            "extra": "mean: 1.1435426584232506 msec\nrounds: 647"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1628.5086043738852,
            "unit": "iter/sec",
            "range": "stddev: 0.00008386276201419494",
            "extra": "mean: 614.058775811302 usec\nrounds: 1356"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 73649.0504868834,
            "unit": "iter/sec",
            "range": "stddev: 0.00000259602012216981",
            "extra": "mean: 13.577907568246193 usec\nrounds: 47170"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 60056.22644304311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025777115076603836",
            "extra": "mean: 16.6510628327338 usec\nrounds: 23475"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 35038.13813759256,
            "unit": "iter/sec",
            "range": "stddev: 0.000003893167009846232",
            "extra": "mean: 28.54032928556486 usec\nrounds: 18282"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 701.1938994800877,
            "unit": "iter/sec",
            "range": "stddev: 0.0001354109407092929",
            "extra": "mean: 1.4261390476178804 msec\nrounds: 420"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 72.93189672516687,
            "unit": "iter/sec",
            "range": "stddev: 0.000979871095018316",
            "extra": "mean: 13.711421818197778 msec\nrounds: 55"
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
        "date": 1734020586719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2906.184860297832,
            "unit": "iter/sec",
            "range": "stddev: 0.00020245348921502253",
            "extra": "mean: 344.09373390566697 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1319953.363307426,
            "unit": "iter/sec",
            "range": "stddev: 1.2784857577413786e-7",
            "extra": "mean: 757.6025243000145 nsec\nrounds: 1585"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 499251.8972307118,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033785427870148377",
            "extra": "mean: 2.0029968950481223 usec\nrounds: 22223"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 412491.4002095551,
            "unit": "iter/sec",
            "range": "stddev: 0.000004768674473522262",
            "extra": "mean: 2.42429296584602 usec\nrounds: 19306"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 754677.4158369971,
            "unit": "iter/sec",
            "range": "stddev: 0.000003526412488507492",
            "extra": "mean: 1.3250694654628303 usec\nrounds: 3239"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1373986.4263098766,
            "unit": "iter/sec",
            "range": "stddev: 1.3041730001261973e-7",
            "extra": "mean: 727.80922784347 nsec\nrounds: 19961"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20563.71319597774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042902198025022216",
            "extra": "mean: 48.62934969330344 usec\nrounds: 8150"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5229.027087760407,
            "unit": "iter/sec",
            "range": "stddev: 0.00003148169196189434",
            "extra": "mean: 191.2401644161878 usec\nrounds: 1703"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1353280.667935806,
            "unit": "iter/sec",
            "range": "stddev: 4.221417431663748e-7",
            "extra": "mean: 738.9450124380523 nsec\nrounds: 17422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11392.100574979813,
            "unit": "iter/sec",
            "range": "stddev: 0.000017366414353529006",
            "extra": "mean: 87.78012390412661 usec\nrounds: 1937"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1587.005227782078,
            "unit": "iter/sec",
            "range": "stddev: 0.00008199327992563912",
            "extra": "mean: 630.1176470587635 usec\nrounds: 1309"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1721737.1955457742,
            "unit": "iter/sec",
            "range": "stddev: 1.169706620127916e-7",
            "extra": "mean: 580.8087335203953 nsec\nrounds: 83334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 213579.48930304215,
            "unit": "iter/sec",
            "range": "stddev: 0.000006457563403277603",
            "extra": "mean: 4.68209753316306 usec\nrounds: 14026"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55571.46149906107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044503165702978745",
            "extra": "mean: 17.994847949372286 usec\nrounds: 10753"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11460.741932115892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034513030376562674",
            "extra": "mean: 87.25438596586383 usec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1796.552182029652,
            "unit": "iter/sec",
            "range": "stddev: 0.00002433883510501756",
            "extra": "mean: 556.6217391304781 usec\nrounds: 207"
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
        "date": 1734020621261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3012.8477993906713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001989172118587031",
            "extra": "mean: 331.9118875511214 usec\nrounds: 1245"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1337099.8101853044,
            "unit": "iter/sec",
            "range": "stddev: 6.78172156040188e-8",
            "extra": "mean: 747.8873247775073 nsec\nrounds: 1704"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 494996.3412837172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034090408163811387",
            "extra": "mean: 2.020216952324562 usec\nrounds: 20834"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 446055.5360504704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032473198113179687",
            "extra": "mean: 2.2418733076476194 usec\nrounds: 18833"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 978513.8763691076,
            "unit": "iter/sec",
            "range": "stddev: 5.474493047267412e-7",
            "extra": "mean: 1.0219579140876562 usec\nrounds: 3279"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1348704.2840279278,
            "unit": "iter/sec",
            "range": "stddev: 9.959240264161457e-8",
            "extra": "mean: 741.4523790296589 nsec\nrounds: 22322"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19709.407699303552,
            "unit": "iter/sec",
            "range": "stddev: 0.000005938263801697498",
            "extra": "mean: 50.737191865757374 usec\nrounds: 8803"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4858.530767956254,
            "unit": "iter/sec",
            "range": "stddev: 0.000059464247992790866",
            "extra": "mean: 205.82353961723518 usec\nrounds: 1729"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1267905.3777894601,
            "unit": "iter/sec",
            "range": "stddev: 2.139870840744202e-7",
            "extra": "mean: 788.7023886147231 nsec\nrounds: 18588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11329.313993971695,
            "unit": "iter/sec",
            "range": "stddev: 0.000018123101219870202",
            "extra": "mean: 88.26659765384719 usec\nrounds: 1449"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1668.1134794810596,
            "unit": "iter/sec",
            "range": "stddev: 0.00005122305251723621",
            "extra": "mean: 599.479599140398 usec\nrounds: 1397"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1733608.8230670295,
            "unit": "iter/sec",
            "range": "stddev: 1.0706984060160465e-7",
            "extra": "mean: 576.8313974264556 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 202980.9238133687,
            "unit": "iter/sec",
            "range": "stddev: 0.000008080760432949395",
            "extra": "mean: 4.926571331005728 usec\nrounds: 14685"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54976.83955386651,
            "unit": "iter/sec",
            "range": "stddev: 0.000004771023635224316",
            "extra": "mean: 18.18947775308539 usec\nrounds: 11642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11346.449674006595,
            "unit": "iter/sec",
            "range": "stddev: 0.000006212508350406467",
            "extra": "mean: 88.1332953241651 usec\nrounds: 877"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1773.3670955107907,
            "unit": "iter/sec",
            "range": "stddev: 0.000029036918012436777",
            "extra": "mean: 563.8990384627417 usec\nrounds: 208"
          }
        ]
      }
    ]
  }
}