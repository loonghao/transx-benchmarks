window.BENCHMARK_DATA = {
  "lastUpdate": 1791534622778,
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
        "date": 1772501275509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2506.4006483999583,
            "unit": "iter/sec",
            "range": "stddev: 0.00025920671706247905",
            "extra": "mean: 398.9785115314195 usec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1349212.756253708,
            "unit": "iter/sec",
            "range": "stddev: 1.455678562343761e-7",
            "extra": "mean: 741.1729509411476 nsec\nrounds: 1671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 469179.18882639625,
            "unit": "iter/sec",
            "range": "stddev: 0.000004729762844904759",
            "extra": "mean: 2.1313818340949813 usec\nrounds: 16261"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 425544.7213183773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035706111501987476",
            "extra": "mean: 2.349929278647627 usec\nrounds: 16261"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 992069.6623232259,
            "unit": "iter/sec",
            "range": "stddev: 5.350062117670325e-7",
            "extra": "mean: 1.0079937306602067 usec\nrounds: 2552"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1383958.9634833399,
            "unit": "iter/sec",
            "range": "stddev: 4.411926639009858e-7",
            "extra": "mean: 722.5647771253717 nsec\nrounds: 17483"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19449.205113548232,
            "unit": "iter/sec",
            "range": "stddev: 0.000005440505511594793",
            "extra": "mean: 51.41598302664845 usec\nrounds: 7777"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5214.7670845156545,
            "unit": "iter/sec",
            "range": "stddev: 0.00003139775524922391",
            "extra": "mean: 191.76311881106375 usec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1348231.2879120123,
            "unit": "iter/sec",
            "range": "stddev: 4.1929381770888195e-7",
            "extra": "mean: 741.7125006412562 nsec\nrounds: 16000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11074.845027987894,
            "unit": "iter/sec",
            "range": "stddev: 0.00001788061753003267",
            "extra": "mean: 90.29471721480897 usec\nrounds: 1609"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1391.0248346535063,
            "unit": "iter/sec",
            "range": "stddev: 0.00007880723112379565",
            "extra": "mean: 718.8944259568826 usec\nrounds: 1202"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1686306.3611562802,
            "unit": "iter/sec",
            "range": "stddev: 1.4603179671426707e-7",
            "extra": "mean: 593.0120546504739 nsec\nrounds: 84034"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 199869.19516248297,
            "unit": "iter/sec",
            "range": "stddev: 0.000007124996186238609",
            "extra": "mean: 5.003272261075817 usec\nrounds: 13263"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54304.402273208725,
            "unit": "iter/sec",
            "range": "stddev: 0.000005551955376711149",
            "extra": "mean: 18.414713322300088 usec\nrounds: 9488"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11353.115276425859,
            "unit": "iter/sec",
            "range": "stddev: 0.000008247489205531701",
            "extra": "mean: 88.08155080363245 usec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1864.8077446417055,
            "unit": "iter/sec",
            "range": "stddev: 0.000016189613251876283",
            "extra": "mean: 536.2483091746999 usec\nrounds: 207"
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
        "date": 1772501292376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2530.512282607246,
            "unit": "iter/sec",
            "range": "stddev: 0.00019385251193319785",
            "extra": "mean: 395.1769002953333 usec\nrounds: 1013"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1346945.2340602155,
            "unit": "iter/sec",
            "range": "stddev: 1.6311421550394953e-7",
            "extra": "mean: 742.4206825288746 nsec\nrounds: 1702"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 485361.6220895801,
            "unit": "iter/sec",
            "range": "stddev: 0.000004505681345265431",
            "extra": "mean: 2.060319470037201 usec\nrounds: 20534"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 445164.7812321287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033964065546750243",
            "extra": "mean: 2.246359195873933 usec\nrounds: 17606"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 980297.6241242433,
            "unit": "iter/sec",
            "range": "stddev: 4.5661134761680074e-7",
            "extra": "mean: 1.020098361345472 usec\nrounds: 3050"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1367460.7889485545,
            "unit": "iter/sec",
            "range": "stddev: 2.8610539956139147e-7",
            "extra": "mean: 731.2823944070115 nsec\nrounds: 23924"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19824.658744501416,
            "unit": "iter/sec",
            "range": "stddev: 0.000007130539201679705",
            "extra": "mean: 50.442230198659075 usec\nrounds: 8636"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5192.374356235435,
            "unit": "iter/sec",
            "range": "stddev: 0.00003100195439923757",
            "extra": "mean: 192.5901199321495 usec\nrounds: 1751"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1364638.4480567905,
            "unit": "iter/sec",
            "range": "stddev: 3.6857858986890127e-7",
            "extra": "mean: 732.794830325918 nsec\nrounds: 17332"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11234.582689010644,
            "unit": "iter/sec",
            "range": "stddev: 0.000022247235505266752",
            "extra": "mean: 89.0108718482416 usec\nrounds: 1904"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1413.470781072939,
            "unit": "iter/sec",
            "range": "stddev: 0.00006834521701849848",
            "extra": "mean: 707.478367003044 usec\nrounds: 1188"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1683485.3943066632,
            "unit": "iter/sec",
            "range": "stddev: 1.4526202033011025e-7",
            "extra": "mean: 594.0057474699182 nsec\nrounds: 82645"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 209413.5838390851,
            "unit": "iter/sec",
            "range": "stddev: 0.00000607966570066059",
            "extra": "mean: 4.77523941698265 usec\nrounds: 14410"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54838.3601822043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064469768428017285",
            "extra": "mean: 18.235410334616677 usec\nrounds: 11186"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11255.822158133707,
            "unit": "iter/sec",
            "range": "stddev: 0.00000866770746289867",
            "extra": "mean: 88.842910446784 usec\nrounds: 804"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1822.361057862181,
            "unit": "iter/sec",
            "range": "stddev: 0.000022256188538333175",
            "extra": "mean: 548.7386792456507 usec\nrounds: 212"
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
        "date": 1772859158390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2431.618791036853,
            "unit": "iter/sec",
            "range": "stddev: 0.0002135226507944266",
            "extra": "mean: 411.2486725658159 usec\nrounds: 1017"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1321250.106800776,
            "unit": "iter/sec",
            "range": "stddev: 8.11735053163687e-7",
            "extra": "mean: 756.8589738254489 nsec\nrounds: 1560"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 476393.0706413785,
            "unit": "iter/sec",
            "range": "stddev: 0.000004395013665837736",
            "extra": "mean: 2.0991069384230925 usec\nrounds: 21835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 432346.55166438274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035639527279580585",
            "extra": "mean: 2.312959352053001 usec\nrounds: 20001"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 960078.0325830604,
            "unit": "iter/sec",
            "range": "stddev: 7.820478263123479e-7",
            "extra": "mean: 1.0415820027769314 usec\nrounds: 2756"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1389454.097921419,
            "unit": "iter/sec",
            "range": "stddev: 3.603171912049481e-7",
            "extra": "mean: 719.7071148273048 nsec\nrounds: 23149"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19290.948296217066,
            "unit": "iter/sec",
            "range": "stddev: 0.000006494131420409862",
            "extra": "mean: 51.83778343318141 usec\nrounds: 8644"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5104.896987941447,
            "unit": "iter/sec",
            "range": "stddev: 0.000031629202854834816",
            "extra": "mean: 195.89033870069346 usec\nrounds: 1801"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1341967.4840428545,
            "unit": "iter/sec",
            "range": "stddev: 4.225172288284435e-7",
            "extra": "mean: 745.1745380501826 nsec\nrounds: 18019"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10986.734759462397,
            "unit": "iter/sec",
            "range": "stddev: 0.000021972960307766855",
            "extra": "mean: 91.01885336211866 usec\nrounds: 1814"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1354.345308782505,
            "unit": "iter/sec",
            "range": "stddev: 0.00006835301438648242",
            "extra": "mean: 738.3641332201715 usec\nrounds: 1171"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1676552.8069969683,
            "unit": "iter/sec",
            "range": "stddev: 1.6652904505327504e-7",
            "extra": "mean: 596.4619759225398 nsec\nrounds: 82645"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 204987.28888470595,
            "unit": "iter/sec",
            "range": "stddev: 0.000007905711498824113",
            "extra": "mean: 4.878351264806692 usec\nrounds: 13756"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 52137.92114840234,
            "unit": "iter/sec",
            "range": "stddev: 0.000006397897812852143",
            "extra": "mean: 19.17989781667087 usec\nrounds: 10765"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11532.238895359707,
            "unit": "iter/sec",
            "range": "stddev: 0.000005356775063514109",
            "extra": "mean: 86.71343085013402 usec\nrounds: 752"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1799.1258963846628,
            "unit": "iter/sec",
            "range": "stddev: 0.00001717493799266169",
            "extra": "mean: 555.8254716968371 usec\nrounds: 212"
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
        "date": 1772859182095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2502.931871231869,
            "unit": "iter/sec",
            "range": "stddev: 0.00022523107114542204",
            "extra": "mean: 399.53145009409695 usec\nrounds: 1062"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1307766.4867434567,
            "unit": "iter/sec",
            "range": "stddev: 6.64653423686727e-7",
            "extra": "mean: 764.6625067523764 nsec\nrounds: 1763"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 473760.29024195264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036181829342424455",
            "extra": "mean: 2.110772094236292 usec\nrounds: 17731"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 430728.2594684302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034819656214779354",
            "extra": "mean: 2.321649388025106 usec\nrounds: 21414"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 974502.3851514297,
            "unit": "iter/sec",
            "range": "stddev: 8.597695772768948e-7",
            "extra": "mean: 1.026164753660001 usec\nrounds: 2962"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1367516.6570549516,
            "unit": "iter/sec",
            "range": "stddev: 4.2077942051535083e-7",
            "extra": "mean: 731.2525188201904 nsec\nrounds: 24814"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19123.18299667261,
            "unit": "iter/sec",
            "range": "stddev: 0.000008805322669809935",
            "extra": "mean: 52.29254984246073 usec\nrounds: 8577"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5028.921043251166,
            "unit": "iter/sec",
            "range": "stddev: 0.00003404028471668779",
            "extra": "mean: 198.84981120194846 usec\nrounds: 3178"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1349227.6212897203,
            "unit": "iter/sec",
            "range": "stddev: 3.861755652247523e-7",
            "extra": "mean: 741.1647851117253 nsec\nrounds: 11075"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11220.507330787435,
            "unit": "iter/sec",
            "range": "stddev: 0.00001795476953416959",
            "extra": "mean: 89.1225298927568 usec\nrounds: 1589"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1397.0067809778702,
            "unit": "iter/sec",
            "range": "stddev: 0.00006870067217149795",
            "extra": "mean: 715.8161389166805 usec\nrounds: 979"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1665225.6384350753,
            "unit": "iter/sec",
            "range": "stddev: 1.8876001488893953e-7",
            "extra": "mean: 600.5192190892011 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 201250.98967757594,
            "unit": "iter/sec",
            "range": "stddev: 0.000009414097066210463",
            "extra": "mean: 4.968919663958419 usec\nrounds: 14514"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54176.58807614861,
            "unit": "iter/sec",
            "range": "stddev: 0.00000608024884394789",
            "extra": "mean: 18.458157582652433 usec\nrounds: 10953"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10336.69498572814,
            "unit": "iter/sec",
            "range": "stddev: 0.000016814049472802935",
            "extra": "mean: 96.74272109031935 usec\nrounds: 735"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1800.7882307360683,
            "unit": "iter/sec",
            "range": "stddev: 0.00005407747002828364",
            "extra": "mean: 555.3123809517858 usec\nrounds: 210"
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
        "date": 1772859452632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2455.9059810975723,
            "unit": "iter/sec",
            "range": "stddev: 0.00020512541413111025",
            "extra": "mean: 407.1817112286557 usec\nrounds: 935"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1313014.6997354857,
            "unit": "iter/sec",
            "range": "stddev: 2.140452452855168e-7",
            "extra": "mean: 761.6060964141953 nsec\nrounds: 1706"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 484098.7979871163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037673948916023547",
            "extra": "mean: 2.0656940363372143 usec\nrounds: 13263"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 429237.0173260719,
            "unit": "iter/sec",
            "range": "stddev: 0.000003662956968505437",
            "extra": "mean: 2.3297151914564376 usec\nrounds: 23981"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 976562.4991434242,
            "unit": "iter/sec",
            "range": "stddev: 4.1062410442504544e-7",
            "extra": "mean: 1.0240000008981849 usec\nrounds: 2650"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1326261.1341042763,
            "unit": "iter/sec",
            "range": "stddev: 4.2977657526540776e-7",
            "extra": "mean: 753.9993250841773 nsec\nrounds: 26667"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19537.51550448679,
            "unit": "iter/sec",
            "range": "stddev: 0.000006669487882635709",
            "extra": "mean: 51.183580623152935 usec\nrounds: 9166"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5002.598772869627,
            "unit": "iter/sec",
            "range": "stddev: 0.000035579900482208255",
            "extra": "mean: 199.8961030861111 usec\nrounds: 1591"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1304064.05263099,
            "unit": "iter/sec",
            "range": "stddev: 5.925127660451564e-7",
            "extra": "mean: 766.8334986939243 nsec\nrounds: 17183"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10720.259242985156,
            "unit": "iter/sec",
            "range": "stddev: 0.000018370204325708068",
            "extra": "mean: 93.28132625657855 usec\nrounds: 1885"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1369.8283263900519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000753589363185035",
            "extra": "mean: 730.0184853348221 usec\nrounds: 1228"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1701607.5366332512,
            "unit": "iter/sec",
            "range": "stddev: 1.4425331413261276e-7",
            "extra": "mean: 587.6795785580814 nsec\nrounds: 83334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 207273.8826934693,
            "unit": "iter/sec",
            "range": "stddev: 0.000006604365559213563",
            "extra": "mean: 4.8245345096317225 usec\nrounds: 14286"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54950.344671342,
            "unit": "iter/sec",
            "range": "stddev: 0.000004964667315847879",
            "extra": "mean: 18.19824799973503 usec\nrounds: 12500"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11295.307327696193,
            "unit": "iter/sec",
            "range": "stddev: 0.000006872751375229885",
            "extra": "mean: 88.53234099686613 usec\nrounds: 739"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1816.5320056797943,
            "unit": "iter/sec",
            "range": "stddev: 0.000047872039471358783",
            "extra": "mean: 550.4995215461528 usec\nrounds: 209"
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
          "id": "a75dfd198d8c29623311d40d0c63edba96e98652",
          "message": "chore(deps): update actions/checkout action to v6",
          "timestamp": "2026-03-07T12:57:39+08:00",
          "tree_id": "c79c817fdf63faba4188a61f454e8336108e6f41",
          "url": "https://github.com/loonghao/transx/commit/a75dfd198d8c29623311d40d0c63edba96e98652"
        },
        "date": 1772859504571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2507.58317321114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001802529264027623",
            "extra": "mean: 398.79036144568965 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1352832.2263857443,
            "unit": "iter/sec",
            "range": "stddev: 8.223746284014698e-7",
            "extra": "mean: 739.1899605109361 nsec\nrounds: 1753"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 491259.78747120046,
            "unit": "iter/sec",
            "range": "stddev: 0.000003636714155490854",
            "extra": "mean: 2.035582853519481 usec\nrounds: 19456"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 441922.2223626835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034450963464268143",
            "extra": "mean: 2.2628416255096235 usec\nrounds: 22832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 982231.9822251848,
            "unit": "iter/sec",
            "range": "stddev: 7.759197874286284e-7",
            "extra": "mean: 1.0180894311082835 usec\nrounds: 2952"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1396826.495573391,
            "unit": "iter/sec",
            "range": "stddev: 4.85391618826684e-7",
            "extra": "mean: 715.9085277728101 nsec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19802.468391215214,
            "unit": "iter/sec",
            "range": "stddev: 0.000007044813737381497",
            "extra": "mean: 50.498755015996935 usec\nrounds: 9719"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5181.281937268938,
            "unit": "iter/sec",
            "range": "stddev: 0.00003343934920213987",
            "extra": "mean: 193.00242914924286 usec\nrounds: 1729"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1372321.141964435,
            "unit": "iter/sec",
            "range": "stddev: 4.6899667867131485e-7",
            "extra": "mean: 728.6924098309315 nsec\nrounds: 15823"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11262.44665036941,
            "unit": "iter/sec",
            "range": "stddev: 0.00002223303168796535",
            "extra": "mean: 88.79065366912968 usec\nrounds: 1744"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1390.7472562616176,
            "unit": "iter/sec",
            "range": "stddev: 0.00006167391756417963",
            "extra": "mean: 719.0379096544391 usec\nrounds: 1129"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1701447.5273404494,
            "unit": "iter/sec",
            "range": "stddev: 1.38430820553225e-7",
            "extra": "mean: 587.7348457304229 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 213244.73891259986,
            "unit": "iter/sec",
            "range": "stddev: 0.000004905867771184506",
            "extra": "mean: 4.689447463507451 usec\nrounds: 15456"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55134.753248258334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062424843359777034",
            "extra": "mean: 18.137380528343787 usec\nrounds: 12346"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10912.12714487375,
            "unit": "iter/sec",
            "range": "stddev: 0.000007150118544150634",
            "extra": "mean: 91.64116095089449 usec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1802.2639207553698,
            "unit": "iter/sec",
            "range": "stddev: 0.00003277947599943293",
            "extra": "mean: 554.8576923078376 usec\nrounds: 208"
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
        "date": 1772859510115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2462.2815413604762,
            "unit": "iter/sec",
            "range": "stddev: 0.00019214751255442836",
            "extra": "mean: 406.12739981288786 usec\nrounds: 1073"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1257806.830129165,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010382954128213172",
            "extra": "mean: 795.0346396968678 nsec\nrounds: 1732"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 479070.63612777484,
            "unit": "iter/sec",
            "range": "stddev: 0.000003710114586147036",
            "extra": "mean: 2.0873748557890868 usec\nrounds: 22574"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 433424.69739453256,
            "unit": "iter/sec",
            "range": "stddev: 0.000003608340227155086",
            "extra": "mean: 2.3072058560837667 usec\nrounds: 22676"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 934181.2594928523,
            "unit": "iter/sec",
            "range": "stddev: 9.7723623745513e-7",
            "extra": "mean: 1.0704560703164603 usec\nrounds: 2982"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1304717.3219539805,
            "unit": "iter/sec",
            "range": "stddev: 5.208613860527297e-7",
            "extra": "mean: 766.4495467128255 nsec\nrounds: 27174"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19876.832785366452,
            "unit": "iter/sec",
            "range": "stddev: 0.000008094804271884962",
            "extra": "mean: 50.309826057208234 usec\nrounds: 8681"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5105.776856615588,
            "unit": "iter/sec",
            "range": "stddev: 0.00003638637124535359",
            "extra": "mean: 195.8565812965942 usec\nrounds: 1679"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1350452.5241574277,
            "unit": "iter/sec",
            "range": "stddev: 3.6937056526536893e-7",
            "extra": "mean: 740.492525365835 nsec\nrounds: 19532"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11107.683903621384,
            "unit": "iter/sec",
            "range": "stddev: 0.000018724297405696186",
            "extra": "mean: 90.02776894596134 usec\nrounds: 1887"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1359.8685502579744,
            "unit": "iter/sec",
            "range": "stddev: 0.00007606021861153869",
            "extra": "mean: 735.3651937978083 usec\nrounds: 1290"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1733653.529145033,
            "unit": "iter/sec",
            "range": "stddev: 1.4626183533336562e-7",
            "extra": "mean: 576.8165225574445 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 209856.64530280043,
            "unit": "iter/sec",
            "range": "stddev: 0.000006887302617505254",
            "extra": "mean: 4.765157655870788 usec\nrounds: 14557"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 52906.066315827076,
            "unit": "iter/sec",
            "range": "stddev: 0.000006790762369926896",
            "extra": "mean: 18.901424158628963 usec\nrounds: 11656"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11249.642716494913,
            "unit": "iter/sec",
            "range": "stddev: 0.000007293252817839378",
            "extra": "mean: 88.8917119593264 usec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1809.5354060099075,
            "unit": "iter/sec",
            "range": "stddev: 0.00004086537681430707",
            "extra": "mean: 552.6280373839365 usec\nrounds: 214"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ae2d1555c4227a384a78e1de3da749408630c7a",
          "message": "fix(translate): honour Retry-After and add jitter to rate-limit backoff (#41)\n\nFixes #38",
          "timestamp": "2026-09-25T19:09:57+08:00",
          "tree_id": "e6179664184812c035c84e509e00b9e899b32953",
          "url": "https://github.com/loonghao/transx/commit/4ae2d1555c4227a384a78e1de3da749408630c7a"
        },
        "date": 1790334638143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2886.620292304242,
            "unit": "iter/sec",
            "range": "stddev: 0.00006051830562648456",
            "extra": "mean: 346.425888665028 usec\nrounds: 1491"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1320754.715618794,
            "unit": "iter/sec",
            "range": "stddev: 8.124644776158558e-8",
            "extra": "mean: 757.1428579238382 nsec\nrounds: 1596"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 473944.94474719395,
            "unit": "iter/sec",
            "range": "stddev: 0.000004026873352613055",
            "extra": "mean: 2.109949712689536 usec\nrounds: 22272"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 424111.40899145626,
            "unit": "iter/sec",
            "range": "stddev: 0.000003894031279894509",
            "extra": "mean: 2.3578710187920104 usec\nrounds: 16421"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1018260.712449723,
            "unit": "iter/sec",
            "range": "stddev: 4.5836390306116664e-7",
            "extra": "mean: 982.0667612660892 nsec\nrounds: 2816"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1362614.102294763,
            "unit": "iter/sec",
            "range": "stddev: 4.360312474731366e-7",
            "extra": "mean: 733.8834951993462 nsec\nrounds: 19570"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 18980.177899075,
            "unit": "iter/sec",
            "range": "stddev: 0.000013185128125718748",
            "extra": "mean: 52.68654515871187 usec\nrounds: 8614"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4954.594198370299,
            "unit": "iter/sec",
            "range": "stddev: 0.000039172868959824076",
            "extra": "mean: 201.8328767124717 usec\nrounds: 3650"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1307992.0481130015,
            "unit": "iter/sec",
            "range": "stddev: 3.776535332484522e-7",
            "extra": "mean: 764.530641789962 nsec\nrounds: 16448"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10797.296301779335,
            "unit": "iter/sec",
            "range": "stddev: 0.00001882710150059234",
            "extra": "mean: 92.61577825137627 usec\nrounds: 1876"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1577.2221875662556,
            "unit": "iter/sec",
            "range": "stddev: 0.00007835969030766246",
            "extra": "mean: 634.0260794473462 usec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1632613.3348912885,
            "unit": "iter/sec",
            "range": "stddev: 1.71825445085829e-7",
            "extra": "mean: 612.5149039446225 nsec\nrounds: 144928"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 203343.86293146436,
            "unit": "iter/sec",
            "range": "stddev: 0.000009031605433810606",
            "extra": "mean: 4.917778120193591 usec\nrounds: 12971"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53267.37834055931,
            "unit": "iter/sec",
            "range": "stddev: 0.000005562668792428447",
            "extra": "mean: 18.77321601237077 usec\nrounds: 10342"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11124.364472957166,
            "unit": "iter/sec",
            "range": "stddev: 0.000007630669550282308",
            "extra": "mean: 89.8927756665071 usec\nrounds: 789"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1786.9768236854957,
            "unit": "iter/sec",
            "range": "stddev: 0.000014028654117990603",
            "extra": "mean: 559.6043478267281 usec\nrounds: 207"
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
          "id": "0af1bb597c48fb5b807a951174ec0a9a8630122e",
          "message": "bump: version 0.8.0 → 0.8.1",
          "timestamp": "2026-09-25T11:10:54Z",
          "tree_id": "e542eef30f43b9ce320d43248e30237513220969",
          "url": "https://github.com/loonghao/transx/commit/0af1bb597c48fb5b807a951174ec0a9a8630122e"
        },
        "date": 1790334688966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 6127.2638519050515,
            "unit": "iter/sec",
            "range": "stddev: 0.000022596542534998614",
            "extra": "mean: 163.20498417725003 usec\nrounds: 2528"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2668717.0476576774,
            "unit": "iter/sec",
            "range": "stddev: 2.5681608842797747e-7",
            "extra": "mean: 374.7118867014006 nsec\nrounds: 3037"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 842765.3645203671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023852899047657064",
            "extra": "mean: 1.1865698830292082 usec\nrounds: 36232"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 831766.4226865091,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021679355650331086",
            "extra": "mean: 1.202260601924896 usec\nrounds: 29240"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 2038476.873474734,
            "unit": "iter/sec",
            "range": "stddev: 2.8871943338802364e-7",
            "extra": "mean: 490.5623473154377 nsec\nrounds: 6135"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2862398.1791686225,
            "unit": "iter/sec",
            "range": "stddev: 2.8345475005791586e-7",
            "extra": "mean: 349.3574050170923 nsec\nrounds: 49020"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 41145.27210697448,
            "unit": "iter/sec",
            "range": "stddev: 0.000003387329010598673",
            "extra": "mean: 24.30412897501512 usec\nrounds: 18019"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 9673.93819521612,
            "unit": "iter/sec",
            "range": "stddev: 0.000019223520958078087",
            "extra": "mean: 103.3705177581672 usec\nrounds: 2337"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2610969.9855707358,
            "unit": "iter/sec",
            "range": "stddev: 1.816749026756498e-7",
            "extra": "mean: 382.9994237874813 nsec\nrounds: 29499"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 21316.465781076036,
            "unit": "iter/sec",
            "range": "stddev: 0.000010822376736242004",
            "extra": "mean: 46.912091820012805 usec\nrounds: 3093"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 3271.0226846052115,
            "unit": "iter/sec",
            "range": "stddev: 0.00003857702510599569",
            "extra": "mean: 305.71478599228755 usec\nrounds: 2313"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 3544317.3480297085,
            "unit": "iter/sec",
            "range": "stddev: 4.791049710867675e-8",
            "extra": "mean: 282.14177846045783 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 364844.59499524784,
            "unit": "iter/sec",
            "range": "stddev: 0.000005749214790689899",
            "extra": "mean: 2.7408930095648674 usec\nrounds: 16394"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 91713.57360770706,
            "unit": "iter/sec",
            "range": "stddev: 0.000003424089728951949",
            "extra": "mean: 10.903511450522805 usec\nrounds: 14410"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 20781.181326187274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025216765350795275",
            "extra": "mean: 48.120459770968665 usec\nrounds: 1305"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3630.549814738586,
            "unit": "iter/sec",
            "range": "stddev: 0.000007367572664212532",
            "extra": "mean: 275.4403743312923 usec\nrounds: 374"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb24c14c52088b25430863040500a321c7e7703f",
          "message": "fix(pot): regenerate locations and header on re-extract (#40)\n\nFixes #39",
          "timestamp": "2026-09-25T19:11:12+08:00",
          "tree_id": "3c44e0b33bae8bd9f377551dddd7c1d39804e420",
          "url": "https://github.com/loonghao/transx/commit/fb24c14c52088b25430863040500a321c7e7703f"
        },
        "date": 1790334714180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2488.252094192828,
            "unit": "iter/sec",
            "range": "stddev: 0.00008256816057784432",
            "extra": "mean: 401.88853948273004 usec\nrounds: 1431"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1319634.3475614064,
            "unit": "iter/sec",
            "range": "stddev: 1.2576806410903708e-7",
            "extra": "mean: 757.7856713474694 nsec\nrounds: 1689"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 487716.661348022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035240874443140583",
            "extra": "mean: 2.050370797741572 usec\nrounds: 24272"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 437657.2671751945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034454689445562456",
            "extra": "mean: 2.2848929402095344 usec\nrounds: 23585"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 971162.7271049193,
            "unit": "iter/sec",
            "range": "stddev: 6.215664914780127e-7",
            "extra": "mean: 1.029693554015449 usec\nrounds: 2839"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1401074.1075483654,
            "unit": "iter/sec",
            "range": "stddev: 3.269667384337988e-7",
            "extra": "mean: 713.7381203552645 nsec\nrounds: 28410"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19372.048580837247,
            "unit": "iter/sec",
            "range": "stddev: 0.00000905364718997579",
            "extra": "mean: 51.620766684902705 usec\nrounds: 7252"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4926.955027221651,
            "unit": "iter/sec",
            "range": "stddev: 0.000042584200791264614",
            "extra": "mean: 202.96511627870652 usec\nrounds: 1763"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1375083.1899419795,
            "unit": "iter/sec",
            "range": "stddev: 3.9713661728468627e-7",
            "extra": "mean: 727.2287286430969 nsec\nrounds: 20662"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11035.45590595023,
            "unit": "iter/sec",
            "range": "stddev: 0.000018006830833003077",
            "extra": "mean: 90.61700835221569 usec\nrounds: 1317"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1367.3599981922368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000673032092867829",
            "extra": "mean: 731.3362986500138 usec\nrounds: 1259"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1672778.7743546602,
            "unit": "iter/sec",
            "range": "stddev: 1.148486871698643e-7",
            "extra": "mean: 597.8076810459618 nsec\nrounds: 81968"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 205457.50881750727,
            "unit": "iter/sec",
            "range": "stddev: 0.000005892945431331235",
            "extra": "mean: 4.867186435557467 usec\nrounds: 13211"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53919.00463937682,
            "unit": "iter/sec",
            "range": "stddev: 0.000005326554532257082",
            "extra": "mean: 18.546336429766068 usec\nrounds: 11628"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11266.288289675038,
            "unit": "iter/sec",
            "range": "stddev: 0.000006979017626554214",
            "extra": "mean: 88.76037735661775 usec\nrounds: 742"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1802.3610930307927,
            "unit": "iter/sec",
            "range": "stddev: 0.00001633982057553049",
            "extra": "mean: 554.82777777811 usec\nrounds: 216"
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
          "id": "d0cb9c8a8b5d4eefc3fd9656d665b4cfbddd56ec",
          "message": "bump: version 0.8.1 → 0.8.2",
          "timestamp": "2026-09-25T11:11:38Z",
          "tree_id": "b1db204df621ebdb39878a8a4e80327af6ded70e",
          "url": "https://github.com/loonghao/transx/commit/d0cb9c8a8b5d4eefc3fd9656d665b4cfbddd56ec"
        },
        "date": 1790334741412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2383.878603143521,
            "unit": "iter/sec",
            "range": "stddev: 0.00012497824355696557",
            "extra": "mean: 419.4844480257266 usec\nrounds: 1241"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1173651.7215659847,
            "unit": "iter/sec",
            "range": "stddev: 9.22429976471083e-7",
            "extra": "mean: 852.0415227319022 nsec\nrounds: 1445"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 479414.92070744483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038791063610033995",
            "extra": "mean: 2.085875839083936 usec\nrounds: 16978"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 427328.314793712,
            "unit": "iter/sec",
            "range": "stddev: 0.000003733473508152265",
            "extra": "mean: 2.3401210857809387 usec\nrounds: 15361"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1004947.7735896275,
            "unit": "iter/sec",
            "range": "stddev: 1.1492670692316456e-7",
            "extra": "mean: 995.0765863464187 nsec\nrounds: 2742"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1358143.161612098,
            "unit": "iter/sec",
            "range": "stddev: 4.993956884808418e-7",
            "extra": "mean: 736.2994036748034 nsec\nrounds: 18116"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20166.068023169486,
            "unit": "iter/sec",
            "range": "stddev: 0.000008663860974144477",
            "extra": "mean: 49.58824887682942 usec\nrounds: 7795"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4947.43775777054,
            "unit": "iter/sec",
            "range": "stddev: 0.000039369483196888536",
            "extra": "mean: 202.1248268215969 usec\nrounds: 3609"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1338480.552921193,
            "unit": "iter/sec",
            "range": "stddev: 5.794635748020745e-7",
            "extra": "mean: 747.1158231007022 nsec\nrounds: 17544"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11129.269281459394,
            "unit": "iter/sec",
            "range": "stddev: 0.000020753001469827182",
            "extra": "mean: 89.85315879326706 usec\nrounds: 1757"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1279.6572517352095,
            "unit": "iter/sec",
            "range": "stddev: 0.00010707285803621232",
            "extra": "mean: 781.4592529710628 usec\nrounds: 1178"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1702627.2829325842,
            "unit": "iter/sec",
            "range": "stddev: 1.1724700135841874e-7",
            "extra": "mean: 587.3276024788314 nsec\nrounds: 84746"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 192825.1395010978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000100981003981337",
            "extra": "mean: 5.186045774878368 usec\nrounds: 12627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 48087.7199336621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059185778453012155",
            "extra": "mean: 20.79532989668711 usec\nrounds: 9700"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11273.118032787974,
            "unit": "iter/sec",
            "range": "stddev: 0.000008123399889617813",
            "extra": "mean: 88.70660247603992 usec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1808.084948393742,
            "unit": "iter/sec",
            "range": "stddev: 0.000021571351940148395",
            "extra": "mean: 553.0713592236776 usec\nrounds: 206"
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
          "id": "29fc3ac96c538f8526802e9a1a3f03838fb12ed4",
          "message": "bump: version 0.8.2 → 0.8.3",
          "timestamp": "2026-09-25T14:04:28Z",
          "tree_id": "6e6336c577b3cf368435bce522716cbd22e65a60",
          "url": "https://github.com/loonghao/transx/commit/29fc3ac96c538f8526802e9a1a3f03838fb12ed4"
        },
        "date": 1790345124801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 237.1785912439518,
            "unit": "iter/sec",
            "range": "stddev: 0.0018248231311448206",
            "extra": "mean: 4.216232142855771 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 27.456991319765766,
            "unit": "iter/sec",
            "range": "stddev: 0.0019124647212390422",
            "extra": "mean: 36.42059642857224 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 14.808536269668643,
            "unit": "iter/sec",
            "range": "stddev: 0.005131091322024954",
            "extra": "mean: 67.52861874999994 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 22.919441050856953,
            "unit": "iter/sec",
            "range": "stddev: 0.0033142707785995423",
            "extra": "mean: 43.63108148148361 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 217.9803601482087,
            "unit": "iter/sec",
            "range": "stddev: 0.0016117953859508336",
            "extra": "mean: 4.587569262295385 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 1935.700725470153,
            "unit": "iter/sec",
            "range": "stddev: 0.000020297593476404067",
            "extra": "mean: 516.6087850471383 usec\nrounds: 535"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3282.42195615663,
            "unit": "iter/sec",
            "range": "stddev: 0.000041367402780545935",
            "extra": "mean: 304.6530925508719 usec\nrounds: 2215"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1224134.0087317305,
            "unit": "iter/sec",
            "range": "stddev: 6.403548838737388e-7",
            "extra": "mean: 816.9040259211935 nsec\nrounds: 108696"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 536966.2734893615,
            "unit": "iter/sec",
            "range": "stddev: 3.7424429081615494e-7",
            "extra": "mean: 1.8623143563593147 usec\nrounds: 1616"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 459306.22422897466,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015795234284388005",
            "extra": "mean: 2.1771967094037836 usec\nrounds: 22124"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 951587.367752574,
            "unit": "iter/sec",
            "range": "stddev: 4.4176896315477993e-7",
            "extra": "mean: 1.050875656705874 usec\nrounds: 3426"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1263545.7236323927,
            "unit": "iter/sec",
            "range": "stddev: 3.7001937056879995e-7",
            "extra": "mean: 791.423674898949 nsec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19576.59050859633,
            "unit": "iter/sec",
            "range": "stddev: 0.000005358108299934276",
            "extra": "mean: 51.081417857766766 usec\nrounds: 15601"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5820.688640996884,
            "unit": "iter/sec",
            "range": "stddev: 0.000033523833045344604",
            "extra": "mean: 171.80097780126826 usec\nrounds: 3784"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1249462.891604457,
            "unit": "iter/sec",
            "range": "stddev: 4.242489265879481e-7",
            "extra": "mean: 800.3438971411808 nsec\nrounds: 105264"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11177.681193527165,
            "unit": "iter/sec",
            "range": "stddev: 0.000012388126488707028",
            "extra": "mean: 89.46399371088573 usec\nrounds: 636"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1816.7006089770996,
            "unit": "iter/sec",
            "range": "stddev: 0.00008137945385403565",
            "extra": "mean: 550.448431105582 usec\nrounds: 1466"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1427106.3938085176,
            "unit": "iter/sec",
            "range": "stddev: 1.6531574387349988e-7",
            "extra": "mean: 700.7186039798956 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 191334.95296846871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015413559142821085",
            "extra": "mean: 5.2264365944929905 usec\nrounds: 12286"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 51019.23347192079,
            "unit": "iter/sec",
            "range": "stddev: 0.000003231513164253329",
            "extra": "mean: 19.600451279817154 usec\nrounds: 10858"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10156.035304498168,
            "unit": "iter/sec",
            "range": "stddev: 0.000012462465295550663",
            "extra": "mean: 98.46361990855765 usec\nrounds: 1105"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1528.3754804821162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004443020550993299",
            "extra": "mean: 654.2894810668884 usec\nrounds: 713"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83dec3f9889c6926670b61527f49b43cab794bf3",
          "message": "perf: faster PO/POT/MO parsing and less duplicated work (#43)\n\nSpeeds up PO/POT/MO parsing and removes duplicated work across the translation hot path.",
          "timestamp": "2026-09-25T22:04:04+08:00",
          "tree_id": "a5340d6efbb886961d09b1f80c4c32885721d113",
          "url": "https://github.com/loonghao/transx/commit/83dec3f9889c6926670b61527f49b43cab794bf3"
        },
        "date": 1790345122382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 307.5496891786292,
            "unit": "iter/sec",
            "range": "stddev: 0.002669445427675949",
            "extra": "mean: 3.2515071066099694 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.99629857468524,
            "unit": "iter/sec",
            "range": "stddev: 0.0023124964138512456",
            "extra": "mean: 20.409704999974565 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 25.779899240695617,
            "unit": "iter/sec",
            "range": "stddev: 0.003094196073336138",
            "extra": "mean: 38.789911111111735 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 38.38784989650719,
            "unit": "iter/sec",
            "range": "stddev: 0.003312970416660038",
            "extra": "mean: 26.049909090922732 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 300.7712562541329,
            "unit": "iter/sec",
            "range": "stddev: 0.0016490919978670983",
            "extra": "mean: 3.3247857938760697 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3269.0092688122377,
            "unit": "iter/sec",
            "range": "stddev: 0.000015540047396001126",
            "extra": "mean: 305.90307881364316 usec\nrounds: 812"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 6710.1074667136245,
            "unit": "iter/sec",
            "range": "stddev: 0.00018110099235478568",
            "extra": "mean: 149.02890973961777 usec\nrounds: 2238"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2156303.9518403932,
            "unit": "iter/sec",
            "range": "stddev: 3.7106791127950096e-7",
            "extra": "mean: 463.75651222384755 nsec\nrounds: 135136"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 827827.7477597734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013199668216824353",
            "extra": "mean: 1.207980769799213 usec\nrounds: 2080"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 725409.9529282462,
            "unit": "iter/sec",
            "range": "stddev: 6.492598531060444e-7",
            "extra": "mean: 1.3785308513666268 usec\nrounds: 22884"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1458962.815240652,
            "unit": "iter/sec",
            "range": "stddev: 3.0595075126465087e-7",
            "extra": "mean: 685.4184284573781 nsec\nrounds: 7098"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1993351.006834119,
            "unit": "iter/sec",
            "range": "stddev: 5.28196649147576e-7",
            "extra": "mean: 501.6677928631448 nsec\nrounds: 161291"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 31946.30120206758,
            "unit": "iter/sec",
            "range": "stddev: 0.000003910743633785796",
            "extra": "mean: 31.30252837956963 usec\nrounds: 23256"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 8747.188946287755,
            "unit": "iter/sec",
            "range": "stddev: 0.000010819751208700831",
            "extra": "mean: 114.322441888533 usec\nrounds: 3743"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1989674.7921861962,
            "unit": "iter/sec",
            "range": "stddev: 3.0915324925612494e-7",
            "extra": "mean: 502.5946973481176 nsec\nrounds: 107527"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 16731.026651669636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044337034942309",
            "extra": "mean: 59.76919532909878 usec\nrounds: 3256"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 3670.56121107479,
            "unit": "iter/sec",
            "range": "stddev: 0.00008215178475619192",
            "extra": "mean: 272.4379032238469 usec\nrounds: 1860"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2614017.917287811,
            "unit": "iter/sec",
            "range": "stddev: 1.0301245428044237e-7",
            "extra": "mean: 382.5528483895315 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 270700.8896473352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010504220157205257",
            "extra": "mean: 3.6941141985265875 usec\nrounds: 13643"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 71224.59545162742,
            "unit": "iter/sec",
            "range": "stddev: 0.000004646844226368195",
            "extra": "mean: 14.040093785848955 usec\nrounds: 10236"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15545.862769584794,
            "unit": "iter/sec",
            "range": "stddev: 0.000004861621484437222",
            "extra": "mean: 64.32579618266556 usec\nrounds: 1570"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2916.0416515556085,
            "unit": "iter/sec",
            "range": "stddev: 0.00004195151185937119",
            "extra": "mean: 342.9306297687944 usec\nrounds: 1048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7a3b063f5ecc2be0b164c5ee92350ad721bf225",
          "message": "ci: drive releases with release-please instead of commitizen (#42)\n\nConventional commits now own the version: merging the\n\"chore: release vX.Y.Z\" PR creates the tag and GitHub Release, and the release\nworkflow builds the wheel/sdist, publishes to PyPI and attaches the artifacts.\n\n- add release-please-config.json and .release-please-manifest.json\n- replace the commitizen bump-commit workflow with release-please\n- mark every version-bearing file with x-release-please-version so the bump\n  cannot leave a stale copy behind\n- drop [tool.commitizen] from pyproject.toml\n- vendor scripts/ci/ (releasable-commit gate, dist/version check, version\n  consistency check)\n\nRepo-specific notes:\n- Tracked by Monica PIP-3615, which also asks for this switch.",
          "timestamp": "2026-09-25T23:36:29+08:00",
          "tree_id": "6f3f3182858a402e3150f495ef60ee2f851c2b79",
          "url": "https://github.com/loonghao/transx/commit/e7a3b063f5ecc2be0b164c5ee92350ad721bf225"
        },
        "date": 1790350642077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 229.780731736758,
            "unit": "iter/sec",
            "range": "stddev: 0.0021099804976347403",
            "extra": "mean: 4.351974999999663 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 26.515312214012866,
            "unit": "iter/sec",
            "range": "stddev: 0.0027918852051665687",
            "extra": "mean: 37.71405714285793 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 14.911958306958898,
            "unit": "iter/sec",
            "range": "stddev: 0.002341908565511639",
            "extra": "mean: 67.06027333333773 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 22.224448466120734,
            "unit": "iter/sec",
            "range": "stddev: 0.0033097106048627554",
            "extra": "mean: 44.995492307690526 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 205.89934419240225,
            "unit": "iter/sec",
            "range": "stddev: 0.0022211318344097",
            "extra": "mean: 4.856742035397412 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 1998.0672541773963,
            "unit": "iter/sec",
            "range": "stddev: 0.000024232378181848746",
            "extra": "mean: 500.4836538456258 usec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3118.7805690789723,
            "unit": "iter/sec",
            "range": "stddev: 0.00018000031428717412",
            "extra": "mean: 320.6381397634899 usec\nrounds: 2032"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1398956.2073496103,
            "unit": "iter/sec",
            "range": "stddev: 3.776890361647993e-7",
            "extra": "mean: 714.8186589018022 nsec\nrounds: 103093"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 311842.8167809138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012216358730117192",
            "extra": "mean: 3.2067437381523956 usec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 488829.3973519608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012217653456630005",
            "extra": "mean: 2.0457034814540678 usec\nrounds: 15338"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 966268.9646271267,
            "unit": "iter/sec",
            "range": "stddev: 3.636465345143301e-7",
            "extra": "mean: 1.0349085364507074 usec\nrounds: 2624"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1399931.4598623153,
            "unit": "iter/sec",
            "range": "stddev: 3.9231983153993637e-7",
            "extra": "mean: 714.3206854558088 nsec\nrounds: 111112"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19504.176109363954,
            "unit": "iter/sec",
            "range": "stddev: 0.000006659165846852212",
            "extra": "mean: 51.27107109743026 usec\nrounds: 15106"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6019.594785887367,
            "unit": "iter/sec",
            "range": "stddev: 0.000021505794256266623",
            "extra": "mean: 166.12413884476894 usec\nrounds: 3774"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1374144.1646933167,
            "unit": "iter/sec",
            "range": "stddev: 4.4684666009660645e-7",
            "extra": "mean: 727.7256824237079 nsec\nrounds: 84034"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 12175.750703411328,
            "unit": "iter/sec",
            "range": "stddev: 0.000006303015581948603",
            "extra": "mean: 82.13045949764938 usec\nrounds: 2111"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1754.4778860220122,
            "unit": "iter/sec",
            "range": "stddev: 0.00006571763427884641",
            "extra": "mean: 569.9701363961527 usec\nrounds: 1393"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1713904.5880531971,
            "unit": "iter/sec",
            "range": "stddev: 1.2975398085656672e-7",
            "extra": "mean: 583.4630509596674 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 195856.7839692538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017785116999367487",
            "extra": "mean: 5.105771573156145 usec\nrounds: 10673"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 49731.41062272115,
            "unit": "iter/sec",
            "range": "stddev: 0.000005447413269358017",
            "extra": "mean: 20.108015989860593 usec\nrounds: 9506"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10366.400969686694,
            "unit": "iter/sec",
            "range": "stddev: 0.000008406766618305318",
            "extra": "mean: 96.46549491228326 usec\nrounds: 1081"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1825.117518062433,
            "unit": "iter/sec",
            "range": "stddev: 0.00005343980341760096",
            "extra": "mean: 547.9099236643195 usec\nrounds: 786"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ccce643633ea6cca68411a86f21b5b33fc8e8bd",
          "message": "ci: fail when vx.lock is missing or out of sync with vx.toml (#45)\n\n* ci: fail when vx.lock is missing or out of sync with vx.toml\n\n* ci: move the macOS job off the retired macos-13 runner\n\nmacos-13 jobs queue indefinitely with no runner available. macos-15-intel is\nthe in-service x64 macOS label, so the x86_64-apple-darwin triple is unchanged.",
          "timestamp": "2026-09-28T13:52:45+08:00",
          "tree_id": "b8e4fcd13c4354500922c5c1ed36828ff77003b3",
          "url": "https://github.com/loonghao/transx/commit/6ccce643633ea6cca68411a86f21b5b33fc8e8bd"
        },
        "date": 1790574840792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 327.47211073190664,
            "unit": "iter/sec",
            "range": "stddev: 0.001670287828941047",
            "extra": "mean: 3.0536951612916905 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.1951666106995,
            "unit": "iter/sec",
            "range": "stddev: 0.0031221621942695977",
            "extra": "mean: 20.748968627447304 msec\nrounds: 51"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 26.517607407195666,
            "unit": "iter/sec",
            "range": "stddev: 0.0032804262180048675",
            "extra": "mean: 37.71079285715067 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 35.4189925138632,
            "unit": "iter/sec",
            "range": "stddev: 0.012020160890987034",
            "extra": "mean: 28.233439999982895 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 303.2719831781755,
            "unit": "iter/sec",
            "range": "stddev: 0.0016333905803452315",
            "extra": "mean: 3.297370200571707 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3259.9140456830514,
            "unit": "iter/sec",
            "range": "stddev: 0.000015083553462377068",
            "extra": "mean: 306.7565543098451 usec\nrounds: 801"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 6839.648183803614,
            "unit": "iter/sec",
            "range": "stddev: 0.000166110986847173",
            "extra": "mean: 146.20635055002018 usec\nrounds: 2362"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2144295.288221839,
            "unit": "iter/sec",
            "range": "stddev: 3.118966608315015e-7",
            "extra": "mean: 466.3536806207562 nsec\nrounds: 103093"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 832898.7569397378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011843194617524998",
            "extra": "mean: 1.2006261165213294 usec\nrounds: 2236"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 740514.5819597567,
            "unit": "iter/sec",
            "range": "stddev: 6.326081640891864e-7",
            "extra": "mean: 1.350412300259531 usec\nrounds: 18797"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1401225.421186261,
            "unit": "iter/sec",
            "range": "stddev: 6.61008406867491e-7",
            "extra": "mean: 713.6610461672981 nsec\nrounds: 6998"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2124806.3331032833,
            "unit": "iter/sec",
            "range": "stddev: 3.9385976897160234e-7",
            "extra": "mean: 470.63112737408795 nsec\nrounds: 126583"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 30296.53856096395,
            "unit": "iter/sec",
            "range": "stddev: 0.000006139403236271717",
            "extra": "mean: 33.007071021917525 usec\nrounds: 22472"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 9041.805583537123,
            "unit": "iter/sec",
            "range": "stddev: 0.000007694950617851366",
            "extra": "mean: 110.59737911427237 usec\nrounds: 4922"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2136582.5587903536,
            "unit": "iter/sec",
            "range": "stddev: 3.8146135888412937e-7",
            "extra": "mean: 468.0371445913887 nsec\nrounds: 101011"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 18498.380806612528,
            "unit": "iter/sec",
            "range": "stddev: 0.000005037918591775551",
            "extra": "mean: 54.058785493405715 usec\nrounds: 3557"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 3791.002603090685,
            "unit": "iter/sec",
            "range": "stddev: 0.00007923064635740676",
            "extra": "mean: 263.78246197581916 usec\nrounds: 2104"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2653223.02932022,
            "unit": "iter/sec",
            "range": "stddev: 1.0007859341625087e-7",
            "extra": "mean: 376.90009055014235 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 282511.1883554649,
            "unit": "iter/sec",
            "range": "stddev: 8.992640812824238e-7",
            "extra": "mean: 3.5396828204260964 usec\nrounds: 11287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 70154.81140864572,
            "unit": "iter/sec",
            "range": "stddev: 0.000003153672963885237",
            "extra": "mean: 14.254189839882633 usec\nrounds: 10788"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15591.177701465393,
            "unit": "iter/sec",
            "range": "stddev: 0.000005531295329917144",
            "extra": "mean: 64.13883666440486 usec\nrounds: 1702"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2791.433752995194,
            "unit": "iter/sec",
            "range": "stddev: 0.000027685520692289148",
            "extra": "mean: 358.2388437221572 usec\nrounds: 1107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "loonghao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "cfb248d716d71eff53f3935987dd44423a0b3fad",
          "message": "chore: drop default [settings] and refresh vx.lock",
          "timestamp": "2026-09-28T15:29:51+08:00",
          "tree_id": "f1e653d82647db35b780f510a40b700d4ca7a784",
          "url": "https://github.com/loonghao/transx/commit/cfb248d716d71eff53f3935987dd44423a0b3fad"
        },
        "date": 1790580662988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 416.4268152393346,
            "unit": "iter/sec",
            "range": "stddev: 0.00148982088382271",
            "extra": "mean: 2.4013823399563403 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 57.03383706270277,
            "unit": "iter/sec",
            "range": "stddev: 0.004623010797251906",
            "extra": "mean: 17.533451219503327 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 32.872515454185205,
            "unit": "iter/sec",
            "range": "stddev: 0.002105764265098567",
            "extra": "mean: 30.420550000005665 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 47.09339562220057,
            "unit": "iter/sec",
            "range": "stddev: 0.0034300664098600416",
            "extra": "mean: 21.234399999998818 msec\nrounds: 57"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 371.783072443252,
            "unit": "iter/sec",
            "range": "stddev: 0.0017565850974289156",
            "extra": "mean: 2.6897405345226884 msec\nrounds: 449"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 4027.6747095930846,
            "unit": "iter/sec",
            "range": "stddev: 0.000009209830364690096",
            "extra": "mean: 248.28221544759006 usec\nrounds: 984"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 7798.475539468055,
            "unit": "iter/sec",
            "range": "stddev: 0.00015146932439943903",
            "extra": "mean: 128.23018998251695 usec\nrounds: 2895"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2658588.2599891555,
            "unit": "iter/sec",
            "range": "stddev: 1.8741345382320775e-7",
            "extra": "mean: 376.1394778761564 nsec\nrounds: 114943"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 1086094.5268499623,
            "unit": "iter/sec",
            "range": "stddev: 4.170968037355181e-7",
            "extra": "mean: 920.7301715259856 nsec\nrounds: 2383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 948393.1420253825,
            "unit": "iter/sec",
            "range": "stddev: 5.647459330897091e-7",
            "extra": "mean: 1.0544150476082168 usec\nrounds: 21053"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1899653.5354474762,
            "unit": "iter/sec",
            "range": "stddev: 1.409363636485186e-7",
            "extra": "mean: 526.411780537888 nsec\nrounds: 7402"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2738340.6315727993,
            "unit": "iter/sec",
            "range": "stddev: 1.90989837906161e-7",
            "extra": "mean: 365.1846627370233 nsec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 40277.83556557941,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030961411395889947",
            "extra": "mean: 24.827550586024515 usec\nrounds: 28170"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 11273.097288957797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061071056186366725",
            "extra": "mean: 88.70676570666326 usec\nrounds: 5587"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2535402.058342594,
            "unit": "iter/sec",
            "range": "stddev: 2.0918150057518089e-7",
            "extra": "mean: 394.4147622305337 nsec\nrounds: 131579"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 23072.622859257244,
            "unit": "iter/sec",
            "range": "stddev: 0.00000506058562250061",
            "extra": "mean: 43.341409691476755 usec\nrounds: 3632"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 4284.174115778597,
            "unit": "iter/sec",
            "range": "stddev: 0.000040257177850547946",
            "extra": "mean: 233.41721717541864 usec\nrounds: 2422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 3365839.1674585184,
            "unit": "iter/sec",
            "range": "stddev: 7.894651785354637e-8",
            "extra": "mean: 297.10272839840457 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 373754.7904052329,
            "unit": "iter/sec",
            "range": "stddev: 5.606157476638786e-7",
            "extra": "mean: 2.675550991375331 usec\nrounds: 12659"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 94954.30566206011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015993424770874059",
            "extra": "mean: 10.531381310490266 usec\nrounds: 12756"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 20094.19462573261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031528098527432645",
            "extra": "mean: 49.76561731513244 usec\nrounds: 2033"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3660.930229149583,
            "unit": "iter/sec",
            "range": "stddev: 0.000016543581510265038",
            "extra": "mean: 273.15461847310195 usec\nrounds: 1494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2359450dc4aa81db635563083c5f486bfe70f7cb",
          "message": "ci(workflows): report benchmark alerts instead of blocking merges (#47)\n\nThe pytest-benchmark gate compared absolute iter/sec against the previous run and failed the job past a 200% threshold. Hosted Windows runners drift up to ~2.5x run to run, so unrelated benchmarks tripped the alert at random on PR #46.",
          "timestamp": "2026-09-28T17:02:25+08:00",
          "tree_id": "56e28414292091ca31e527e9a326fe4698eb9da0",
          "url": "https://github.com/loonghao/transx/commit/2359450dc4aa81db635563083c5f486bfe70f7cb"
        },
        "date": 1790586397675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 243.54771502390983,
            "unit": "iter/sec",
            "range": "stddev: 0.001611567254791748",
            "extra": "mean: 4.1059715953476585 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 32.92199877980103,
            "unit": "iter/sec",
            "range": "stddev: 0.0020321775649244328",
            "extra": "mean: 30.374826470546502 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 18.31910629757833,
            "unit": "iter/sec",
            "range": "stddev: 0.0019916117661292485",
            "extra": "mean: 54.58781578947406 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 26.290946983776383,
            "unit": "iter/sec",
            "range": "stddev: 0.0030228880747050152",
            "extra": "mean: 38.03590645164208 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 217.099941864374,
            "unit": "iter/sec",
            "range": "stddev: 0.0017306544691462456",
            "extra": "mean: 4.606173504296546 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 1794.9076698481658,
            "unit": "iter/sec",
            "range": "stddev: 0.000014853061956213666",
            "extra": "mean: 557.1317214799086 usec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4036.589767831174,
            "unit": "iter/sec",
            "range": "stddev: 0.00003827851713840252",
            "extra": "mean: 247.73386881404392 usec\nrounds: 2241"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1304092.5414836204,
            "unit": "iter/sec",
            "range": "stddev: 9.123781809676859e-7",
            "extra": "mean: 766.8167466569014 nsec\nrounds: 89286"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 544063.7439391478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012524354919683657",
            "extra": "mean: 1.838019921635961 usec\nrounds: 1707"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 475401.5029315927,
            "unit": "iter/sec",
            "range": "stddev: 7.338547337472715e-7",
            "extra": "mean: 2.1034851464150583 usec\nrounds: 21979"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 916819.3635041352,
            "unit": "iter/sec",
            "range": "stddev: 6.078289786032833e-7",
            "extra": "mean: 1.0907273993188187 usec\nrounds: 4303"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1308589.978055995,
            "unit": "iter/sec",
            "range": "stddev: 3.825942523916171e-7",
            "extra": "mean: 764.1813071849841 nsec\nrounds: 106383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 18582.952103440733,
            "unit": "iter/sec",
            "range": "stddev: 0.000006626185500057471",
            "extra": "mean: 53.81276314083835 usec\nrounds: 15106"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5894.0609664509,
            "unit": "iter/sec",
            "range": "stddev: 0.000013356667414112155",
            "extra": "mean: 169.6623101952996 usec\nrounds: 3688"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1283999.8647970005,
            "unit": "iter/sec",
            "range": "stddev: 3.4285654213026323e-7",
            "extra": "mean: 778.8162813849667 nsec\nrounds: 109891"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11637.963250405382,
            "unit": "iter/sec",
            "range": "stddev: 0.000005649199940783889",
            "extra": "mean: 85.92568806789859 usec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2200.437072366126,
            "unit": "iter/sec",
            "range": "stddev: 0.00022500679559335203",
            "extra": "mean: 454.4551682746837 usec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1594938.2438010452,
            "unit": "iter/sec",
            "range": "stddev: 1.5699161120427425e-7",
            "extra": "mean: 626.9835235857049 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 197775.80527666316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014109916907921033",
            "extra": "mean: 5.05623020268393 usec\nrounds: 11364"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 51579.23133247983,
            "unit": "iter/sec",
            "range": "stddev: 0.000002661721169909839",
            "extra": "mean: 19.387648364784614 usec\nrounds: 10363"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10027.889560010175,
            "unit": "iter/sec",
            "range": "stddev: 0.000005678798329868547",
            "extra": "mean: 99.7218800641623 usec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1694.3849496813928,
            "unit": "iter/sec",
            "range": "stddev: 0.00005317179581803654",
            "extra": "mean: 590.1846567912663 usec\nrounds: 743"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hal.long@outlook.com",
            "name": "loonghao",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "ad688591327cc09325ea49845055825325d14d32",
          "message": "style(compat): satisfy isort import-heading check",
          "timestamp": "2026-09-29T01:35:14+08:00",
          "tree_id": "5051480ac79dd538b5669de899f199cb4eb56029",
          "url": "https://github.com/loonghao/transx/commit/ad688591327cc09325ea49845055825325d14d32"
        },
        "date": 1790616963032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 388.5507391941696,
            "unit": "iter/sec",
            "range": "stddev: 0.0023611307938176743",
            "extra": "mean: 2.5736664459162752 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 56.91302916751738,
            "unit": "iter/sec",
            "range": "stddev: 0.0019164125171433153",
            "extra": "mean: 17.57066904762014 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 31.722743986591528,
            "unit": "iter/sec",
            "range": "stddev: 0.002290032984486857",
            "extra": "mean: 31.523124242426093 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 45.542329235105406,
            "unit": "iter/sec",
            "range": "stddev: 0.0032952622383335337",
            "extra": "mean: 21.957594545453542 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 355.3131332554329,
            "unit": "iter/sec",
            "range": "stddev: 0.00207599508217514",
            "extra": "mean: 2.8144189066073864 msec\nrounds: 439"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 4030.954752749162,
            "unit": "iter/sec",
            "range": "stddev: 0.000014865585754466659",
            "extra": "mean: 248.0801848043537 usec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 6378.917351367575,
            "unit": "iter/sec",
            "range": "stddev: 0.0001734502811214864",
            "extra": "mean: 156.76641425454588 usec\nrounds: 2245"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2652622.7876176946,
            "unit": "iter/sec",
            "range": "stddev: 1.955130431249556e-7",
            "extra": "mean: 376.9853763859483 nsec\nrounds: 109891"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 847127.9137676377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000120887519270008",
            "extra": "mean: 1.1804592715549382 usec\nrounds: 2308"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 927533.7584945001,
            "unit": "iter/sec",
            "range": "stddev: 3.2120066976966817e-7",
            "extra": "mean: 1.0781278749607146 usec\nrounds: 21740"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1881587.412087042,
            "unit": "iter/sec",
            "range": "stddev: 5.667236688637282e-7",
            "extra": "mean: 531.4661405450241 nsec\nrounds: 7605"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 2747692.980226085,
            "unit": "iter/sec",
            "range": "stddev: 1.8360167584496374e-7",
            "extra": "mean: 363.94168023740343 nsec\nrounds: 133334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 40386.412577508076,
            "unit": "iter/sec",
            "range": "stddev: 0.000002035513220120611",
            "extra": "mean: 24.760802858655442 usec\nrounds: 27701"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 11383.602315124668,
            "unit": "iter/sec",
            "range": "stddev: 0.000004941146136157858",
            "extra": "mean: 87.84565485666728 usec\nrounds: 5673"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2500717.3870954835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016821839813350619",
            "extra": "mean: 399.8852509925055 nsec\nrounds: 117648"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 23287.583090223183,
            "unit": "iter/sec",
            "range": "stddev: 0.000004001613003574692",
            "extra": "mean: 42.94133900137665 usec\nrounds: 3764"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 4274.433799855056,
            "unit": "iter/sec",
            "range": "stddev: 0.000039778710401147926",
            "extra": "mean: 233.94911392332466 usec\nrounds: 2370"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 3363612.0921486807,
            "unit": "iter/sec",
            "range": "stddev: 1.603516164762133e-7",
            "extra": "mean: 297.29944256519616 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 366167.51804350223,
            "unit": "iter/sec",
            "range": "stddev: 5.172953375757431e-7",
            "extra": "mean: 2.730990463990844 usec\nrounds: 13004"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 94038.55799897773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025069428607349837",
            "extra": "mean: 10.63393592244227 usec\nrounds: 11174"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 20141.83497769894,
            "unit": "iter/sec",
            "range": "stddev: 0.000003401071914775936",
            "extra": "mean: 49.64790949321156 usec\nrounds: 2033"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 3610.0074621101617,
            "unit": "iter/sec",
            "range": "stddev: 0.000013233766389235269",
            "extra": "mean: 277.0077376558853 usec\nrounds: 1357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d679f2fd08c3b30e23ffdbfb033cf26b6b8efcf",
          "message": "feat(translate): persist translations in a translation memory (#50)\n\n* feat(translate): persist translations in a translation memory\n\nAuto-translation re-sent every string on every run, because the caches that\navoid that live in the process and die with it. A project therefore paid the\nfull request count again on each CI run and each local run, which is what kept\npushing it into the backend's rate limit.\n\nAdd a translation memory that survives the process. Strings are looked up\nbefore any request is made, so a repeat run costs no network traffic at all,\nand results are written back so the next run is cheaper still.\n\nThe memory is plain JSON, versioned and sorted, and written through a\ntemporary file and a rename so it can be committed alongside the catalogs and\nreviewed in a diff without churn. A file that is missing, corrupt or from an\nunknown version is set aside and treated as empty: bad cache state must never\nbreak a localisation run.\n\nEntries are keyed by source text, languages and engine, so switching backends\ncannot silently reuse another engine's translations under a new name.\n\nOffline mode (TRANSX_OFFLINE, or --offline) refuses to open a socket. Misses\nfall back to the source text and are reported through the existing failure\ncount rather than raised, so a half populated memory still produces a complete\ncatalog and a non-zero exit status.\n\nThe memory is only enabled when a location is known - an explicit path,\nTRANSX_TM_PATH, or a locale root. A bare GoogleTranslator() stays inert\ninstead of quietly sharing a file in the user's home directory, which would\ncouple unrelated runs together.\n\n* fix(translate): keep offline fallbacks out of the translation memory\n\nAn offline miss substituted the source text for the missing translation\nand then persisted it like any other result. Because the entry was never\nempty it survived every later lookup, so the string was never translated\nagain - not even once the network was back - and failure_count stayed at\nzero, turning a real gap into a green run.\n\nOffline fallbacks are now returned but not remembered, so the gap stays\nvisible to the next run.\n\nAlso spell out the temporary-file cleanup in _atomic_write instead of\nusing contextlib.suppress: that API is Python 3.4+ and raises\nAttributeError on 2.7 inside the very handler save() depends on, where\nonly (IOError, OSError) is caught. The 2.7 static guard now rejects it.",
          "timestamp": "2026-09-29T09:19:04+08:00",
          "tree_id": "7fe5734e7537f58551a9967591e8fc17c0fad4ea",
          "url": "https://github.com/loonghao/transx/commit/6d679f2fd08c3b30e23ffdbfb033cf26b6b8efcf"
        },
        "date": 1790644826778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 221.22705164408035,
            "unit": "iter/sec",
            "range": "stddev: 0.0019482182568157807",
            "extra": "mean: 4.520242857138662 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 25.47537272973384,
            "unit": "iter/sec",
            "range": "stddev: 0.004978493454062387",
            "extra": "mean: 39.253596428555475 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 15.051140766096998,
            "unit": "iter/sec",
            "range": "stddev: 0.002443417119178472",
            "extra": "mean: 66.44014666665801 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 22.595279950299297,
            "unit": "iter/sec",
            "range": "stddev: 0.0034402420858789004",
            "extra": "mean: 44.25703076924055 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 217.72391236716675,
            "unit": "iter/sec",
            "range": "stddev: 0.001728389457194741",
            "extra": "mean: 4.592972765956976 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 1960.59832232698,
            "unit": "iter/sec",
            "range": "stddev: 0.000017660634142978248",
            "extra": "mean: 510.0483809519574 usec\nrounds: 525"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3201.804688941808,
            "unit": "iter/sec",
            "range": "stddev: 0.00019359229700279015",
            "extra": "mean: 312.3238601822707 usec\nrounds: 1974"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1344764.8183166017,
            "unit": "iter/sec",
            "range": "stddev: 4.67325862997743e-7",
            "extra": "mean: 743.6244511897747 nsec\nrounds: 106383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 542579.2362746114,
            "unit": "iter/sec",
            "range": "stddev: 0.000001309346127015223",
            "extra": "mean: 1.8430487809781901 usec\nrounds: 1640"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 481242.46481711563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010137006731027937",
            "extra": "mean: 2.0779546135439757 usec\nrounds: 23311"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 972822.1957379443,
            "unit": "iter/sec",
            "range": "stddev: 7.09814110773015e-7",
            "extra": "mean: 1.0279370725515156 usec\nrounds: 3941"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1374699.3117815265,
            "unit": "iter/sec",
            "range": "stddev: 4.193070577568172e-7",
            "extra": "mean: 727.4318037622793 nsec\nrounds: 126583"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19052.84300545104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074073467285474995",
            "extra": "mean: 52.48560541405285 usec\nrounds: 15221"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5960.705784705425,
            "unit": "iter/sec",
            "range": "stddev: 0.000013162063297269692",
            "extra": "mean: 167.76536808206507 usec\nrounds: 3722"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1362355.0788878524,
            "unit": "iter/sec",
            "range": "stddev: 6.865988433826029e-7",
            "extra": "mean: 734.0230278411278 nsec\nrounds: 105264"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 12088.072216062334,
            "unit": "iter/sec",
            "range": "stddev: 0.000006293294149183318",
            "extra": "mean: 82.72617685649037 usec\nrounds: 2273"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1804.6803846995872,
            "unit": "iter/sec",
            "range": "stddev: 0.00007233750246585115",
            "extra": "mean: 554.1147388081481 usec\nrounds: 1608"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1673317.8149109317,
            "unit": "iter/sec",
            "range": "stddev: 1.5590888416395111e-7",
            "extra": "mean: 597.615104009601 nsec\nrounds: 156250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 188664.80790930038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014639796011714862",
            "extra": "mean: 5.300405576861715 usec\nrounds: 11835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 50999.13551791118,
            "unit": "iter/sec",
            "range": "stddev: 0.000002666516502149379",
            "extra": "mean: 19.608175508167083 usec\nrounds: 11669"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10303.794833280399,
            "unit": "iter/sec",
            "range": "stddev: 0.000010848772177443486",
            "extra": "mean: 97.05162187139862 usec\nrounds: 1079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1787.555571559541,
            "unit": "iter/sec",
            "range": "stddev: 0.00002389933618167772",
            "extra": "mean: 559.4231675424538 usec\nrounds: 764"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccf4c0bb2f249e25f9fb313a338693ad8e5e4613",
          "message": "chore(deps): update actions/checkout action to v7 (#35)\n\nBumps actions/checkout from v6 to v7 across the six workflows that use it. No source changes.\n\nVerified on head 454f3643: 16 check-runs terminal (15 success, 1 skipped), 0 failing; all 9 occurrences migrated, no v4/v5/v6 residue and no SHA-pinned variants left behind.",
          "timestamp": "2026-09-29T10:04:35+08:00",
          "tree_id": "bece67c5a149f26e887753c1728f3295381a831c",
          "url": "https://github.com/loonghao/transx/commit/ccf4c0bb2f249e25f9fb313a338693ad8e5e4613"
        },
        "date": 1790647537247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 245.74276357645098,
            "unit": "iter/sec",
            "range": "stddev: 0.0013818445164246623",
            "extra": "mean: 4.0692958174896505 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 27.275802885180035,
            "unit": "iter/sec",
            "range": "stddev: 0.00196175025877767",
            "extra": "mean: 36.662532142851695 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 14.719474868009824,
            "unit": "iter/sec",
            "range": "stddev: 0.0033182468088986047",
            "extra": "mean: 67.93720625002209 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 22.939062028809023,
            "unit": "iter/sec",
            "range": "stddev: 0.0028146226701258473",
            "extra": "mean: 43.59376153846684 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 218.7156119203161,
            "unit": "iter/sec",
            "range": "stddev: 0.0016891609817826598",
            "extra": "mean: 4.572147325104193 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2008.0638602855802,
            "unit": "iter/sec",
            "range": "stddev: 0.000026208988401596565",
            "extra": "mean: 497.9921305180918 usec\nrounds: 521"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3167.2949310181484,
            "unit": "iter/sec",
            "range": "stddev: 0.00018028134266314687",
            "extra": "mean: 315.72683371123355 usec\nrounds: 2195"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1392405.3806525795,
            "unit": "iter/sec",
            "range": "stddev: 5.27374405110484e-7",
            "extra": "mean: 718.1816544915457 nsec\nrounds: 111112"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 554384.5570363455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011051772220069505",
            "extra": "mean: 1.8038020491513078 usec\nrounds: 1657"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 498637.7210919095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010026742381861502",
            "extra": "mean: 2.0054640026234174 usec\nrounds: 19418"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 995997.6564725201,
            "unit": "iter/sec",
            "range": "stddev: 8.333774035147045e-7",
            "extra": "mean: 1.0040184266513787 usec\nrounds: 3907"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1418907.0708574578,
            "unit": "iter/sec",
            "range": "stddev: 4.538804468232116e-7",
            "extra": "mean: 704.7677896168996 nsec\nrounds: 135136"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20156.691996259953,
            "unit": "iter/sec",
            "range": "stddev: 0.000006831071332718769",
            "extra": "mean: 49.61131519921764 usec\nrounds: 15625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5989.12352568868,
            "unit": "iter/sec",
            "range": "stddev: 0.000018648042586792394",
            "extra": "mean: 166.96933962219646 usec\nrounds: 3816"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1374721.466353832,
            "unit": "iter/sec",
            "range": "stddev: 5.821552900095528e-7",
            "extra": "mean: 727.4200807035448 nsec\nrounds: 111112"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11461.730181248351,
            "unit": "iter/sec",
            "range": "stddev: 0.00002117970703669104",
            "extra": "mean: 87.24686274992082 usec\nrounds: 2040"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1800.4704551940758,
            "unit": "iter/sec",
            "range": "stddev: 0.00007745700099729662",
            "extra": "mean: 555.4103912758782 usec\nrounds: 1559"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1686860.7625666743,
            "unit": "iter/sec",
            "range": "stddev: 1.9329925302919154e-7",
            "extra": "mean: 592.817156099499 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 195859.5332752472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015010906812549202",
            "extra": "mean: 5.105699902769963 usec\nrounds: 12316"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 50930.181177469574,
            "unit": "iter/sec",
            "range": "stddev: 0.000004805682808108521",
            "extra": "mean: 19.634723004723547 usec\nrounds: 10650"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10555.090607287178,
            "unit": "iter/sec",
            "range": "stddev: 0.000007727819225246758",
            "extra": "mean: 94.74101523198725 usec\nrounds: 985"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1809.9225082294606,
            "unit": "iter/sec",
            "range": "stddev: 0.00006484043343814225",
            "extra": "mean: 552.5098425226174 usec\nrounds: 762"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "committer": {
            "email": "13111745+loonghao@users.noreply.github.com",
            "name": "Hal",
            "username": "loonghao"
          },
          "distinct": true,
          "id": "a2f9d659dbabaca0ba967963bbe7a05050d4d60b",
          "message": "chore: release v0.9.0",
          "timestamp": "2026-10-02T00:32:02+08:00",
          "tree_id": "ac40f0cb48ebc12befd53bf6a3852823920e627d",
          "url": "https://github.com/loonghao/transx/commit/a2f9d659dbabaca0ba967963bbe7a05050d4d60b"
        },
        "date": 1790872388266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 234.88693181829908,
            "unit": "iter/sec",
            "range": "stddev: 0.001825107351063507",
            "extra": "mean: 4.257367543859646 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 26.414745465625334,
            "unit": "iter/sec",
            "range": "stddev: 0.002020584957553759",
            "extra": "mean: 37.85764285714371 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 14.494980388291259,
            "unit": "iter/sec",
            "range": "stddev: 0.005551098001169312",
            "extra": "mean: 68.98940000000131 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 22.24550394836233,
            "unit": "iter/sec",
            "range": "stddev: 0.0031848851379612637",
            "extra": "mean: 44.95290384615531 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 210.8045108700389,
            "unit": "iter/sec",
            "range": "stddev: 0.0019175020572858813",
            "extra": "mean: 4.743731506848544 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 1987.434622383089,
            "unit": "iter/sec",
            "range": "stddev: 0.00008065207504509739",
            "extra": "mean: 503.161205273219 usec\nrounds: 531"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3105.39141779076,
            "unit": "iter/sec",
            "range": "stddev: 0.0002271367009950875",
            "extra": "mean: 322.020597555274 usec\nrounds: 2209"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1393877.8099770905,
            "unit": "iter/sec",
            "range": "stddev: 5.37641915848067e-7",
            "extra": "mean: 717.4229999517934 nsec\nrounds: 100000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 573212.2586827694,
            "unit": "iter/sec",
            "range": "stddev: 5.765486971715259e-7",
            "extra": "mean: 1.7445544557926596 usec\nrounds: 1414"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 490415.16222617455,
            "unit": "iter/sec",
            "range": "stddev: 8.069597426276703e-7",
            "extra": "mean: 2.0390886681819396 usec\nrounds: 15823"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 972933.8544878386,
            "unit": "iter/sec",
            "range": "stddev: 5.684588905377713e-7",
            "extra": "mean: 1.0278191013575217 usec\nrounds: 3361"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1306779.9438567946,
            "unit": "iter/sec",
            "range": "stddev: 5.339536154978713e-7",
            "extra": "mean: 765.2397824905602 nsec\nrounds: 97088"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19644.83470701854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074350228364414975",
            "extra": "mean: 50.903966101721814 usec\nrounds: 14750"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6172.55520675108,
            "unit": "iter/sec",
            "range": "stddev: 0.00001834230909349962",
            "extra": "mean: 162.0074614976752 usec\nrounds: 3766"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1372926.3916247154,
            "unit": "iter/sec",
            "range": "stddev: 4.912528268131782e-7",
            "extra": "mean: 728.3711684037221 nsec\nrounds: 97088"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 12219.174306756684,
            "unit": "iter/sec",
            "range": "stddev: 0.000011575055235282914",
            "extra": "mean: 81.83859030859742 usec\nrounds: 2270"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1772.7183970172118,
            "unit": "iter/sec",
            "range": "stddev: 0.00007458212293727533",
            "extra": "mean: 564.1053884715175 usec\nrounds: 1596"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1669658.6758654465,
            "unit": "iter/sec",
            "range": "stddev: 1.6367890845231928e-7",
            "extra": "mean: 598.9248068811942 nsec\nrounds: 156251"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 192747.63740507633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014245782282369358",
            "extra": "mean: 5.188131037364733 usec\nrounds: 11905"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 51024.19137037462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034193993432771323",
            "extra": "mean: 19.598546750916555 usec\nrounds: 7294"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10541.20718878589,
            "unit": "iter/sec",
            "range": "stddev: 0.000008190415257429218",
            "extra": "mean: 94.86579497876065 usec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1773.3367080445182,
            "unit": "iter/sec",
            "range": "stddev: 0.00008283063745718611",
            "extra": "mean: 563.9087012994352 usec\nrounds: 770"
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
          "id": "e0ced77d030575f1235ccf4fee8f6459e85b67a7",
          "message": "chore(deps): update loonghao/vx action to v0.9.34",
          "timestamp": "2026-10-02T00:32:17+08:00",
          "tree_id": "3df08d39b6b49fad0f70720f31c8ee7d5e9c147f",
          "url": "https://github.com/loonghao/transx/commit/e0ced77d030575f1235ccf4fee8f6459e85b67a7"
        },
        "date": 1790872404154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 243.39086173631566,
            "unit": "iter/sec",
            "range": "stddev: 0.0028262975760687302",
            "extra": "mean: 4.108617689530916 msec\nrounds: 277"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 34.552827385871765,
            "unit": "iter/sec",
            "range": "stddev: 0.0025523224050028803",
            "extra": "mean: 28.941191666673504 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 18.684211140928877,
            "unit": "iter/sec",
            "range": "stddev: 0.0031660722156345847",
            "extra": "mean: 53.52112499999748 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 27.590319209126854,
            "unit": "iter/sec",
            "range": "stddev: 0.00375159511970032",
            "extra": "mean: 36.24459696969366 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 218.15587532081267,
            "unit": "iter/sec",
            "range": "stddev: 0.002574679917669325",
            "extra": "mean: 4.583878378381668 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2271.516204505866,
            "unit": "iter/sec",
            "range": "stddev: 0.000023179927026877567",
            "extra": "mean: 440.23458781247604 usec\nrounds: 558"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 5151.28444559373,
            "unit": "iter/sec",
            "range": "stddev: 0.00004369858279646534",
            "extra": "mean: 194.12634083046473 usec\nrounds: 2312"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1544722.7484160387,
            "unit": "iter/sec",
            "range": "stddev: 4.508575937021519e-7",
            "extra": "mean: 647.3653612115195 nsec\nrounds: 98040"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 440865.5201193289,
            "unit": "iter/sec",
            "range": "stddev: 0.000002390971373691098",
            "extra": "mean: 2.268265387888194 usec\nrounds: 1251"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 521965.0532495312,
            "unit": "iter/sec",
            "range": "stddev: 7.807668289200565e-7",
            "extra": "mean: 1.9158370733336028 usec\nrounds: 14706"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 981765.0720005595,
            "unit": "iter/sec",
            "range": "stddev: 8.809177004844161e-7",
            "extra": "mean: 1.0185736165601031 usec\nrounds: 4571"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1532420.8542751635,
            "unit": "iter/sec",
            "range": "stddev: 4.833939284162359e-7",
            "extra": "mean: 652.5622496001602 nsec\nrounds: 103093"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 21860.97705766262,
            "unit": "iter/sec",
            "range": "stddev: 0.000005565459873282252",
            "extra": "mean: 45.743609599987394 usec\nrounds: 15625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6343.174659922921,
            "unit": "iter/sec",
            "range": "stddev: 0.000018900765203787533",
            "extra": "mean: 157.64976586852353 usec\nrounds: 3844"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1519729.0566533965,
            "unit": "iter/sec",
            "range": "stddev: 4.5000400404813286e-7",
            "extra": "mean: 658.0120289350165 nsec\nrounds: 18622"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13057.275391553905,
            "unit": "iter/sec",
            "range": "stddev: 0.000014607121122412638",
            "extra": "mean: 76.58565589011394 usec\nrounds: 2691"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2819.441992374663,
            "unit": "iter/sec",
            "range": "stddev: 0.00027752752851896944",
            "extra": "mean: 354.68011142082554 usec\nrounds: 1795"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1932693.4598745513,
            "unit": "iter/sec",
            "range": "stddev: 1.3670674748888086e-7",
            "extra": "mean: 517.4126268657361 nsec\nrounds: 161291"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 207578.87022809614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013180529029168985",
            "extra": "mean: 4.8174460093224285 usec\nrounds: 10650"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 50971.133644049965,
            "unit": "iter/sec",
            "range": "stddev: 0.000003088016973095882",
            "extra": "mean: 19.618947598524393 usec\nrounds: 9141"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11591.260221285002,
            "unit": "iter/sec",
            "range": "stddev: 0.00000748030141823574",
            "extra": "mean: 86.27189631751193 usec\nrounds: 1466"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2097.1756776923876,
            "unit": "iter/sec",
            "range": "stddev: 0.000057643370692909653",
            "extra": "mean: 476.8317745799641 usec\nrounds: 834"
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
          "id": "4ce68fc0ab280590a8117a282f9b507b25ccc03c",
          "message": "chore(deps): update loonghao/vx action to v0.9.36",
          "timestamp": "2026-10-09T16:29:25+08:00",
          "tree_id": "d94e1857812b2006e15a78dde93a400fca787c4c",
          "url": "https://github.com/loonghao/transx/commit/4ce68fc0ab280590a8117a282f9b507b25ccc03c"
        },
        "date": 1791534618404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 293.0912854006645,
            "unit": "iter/sec",
            "range": "stddev: 0.001883628895689792",
            "extra": "mean: 3.4119062893083645 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 41.798510184453555,
            "unit": "iter/sec",
            "range": "stddev: 0.002402387192086225",
            "extra": "mean: 23.924297674416582 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 22.442172132956816,
            "unit": "iter/sec",
            "range": "stddev: 0.003337461144495833",
            "extra": "mean: 44.558966666665846 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 31.067558996000365,
            "unit": "iter/sec",
            "range": "stddev: 0.004650487245040007",
            "extra": "mean: 32.18791666666635 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 240.30102526976654,
            "unit": "iter/sec",
            "range": "stddev: 0.0025181449053053853",
            "extra": "mean: 4.161447080291816 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2276.851349560519,
            "unit": "iter/sec",
            "range": "stddev: 0.00002703524156937556",
            "extra": "mean: 439.2030249111438 usec\nrounds: 562"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3773.334398716468,
            "unit": "iter/sec",
            "range": "stddev: 0.00022495596039221477",
            "extra": "mean: 265.01759301803696 usec\nrounds: 2177"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1363199.124899912,
            "unit": "iter/sec",
            "range": "stddev: 4.459881967799584e-7",
            "extra": "mean: 733.5685460283885 nsec\nrounds: 84746"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 541789.611874035,
            "unit": "iter/sec",
            "range": "stddev: 9.542255872384555e-7",
            "extra": "mean: 1.8457349090563555 usec\nrounds: 1524"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 496822.98071784957,
            "unit": "iter/sec",
            "range": "stddev: 7.709466336987227e-7",
            "extra": "mean: 2.0127893410951323 usec\nrounds: 16287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 944114.6822343323,
            "unit": "iter/sec",
            "range": "stddev: 9.639049649643021e-7",
            "extra": "mean: 1.0591933573508359 usec\nrounds: 4215"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1620644.8687368308,
            "unit": "iter/sec",
            "range": "stddev: 3.909335202493519e-7",
            "extra": "mean: 617.0383279462229 nsec\nrounds: 90091"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20814.307960715472,
            "unit": "iter/sec",
            "range": "stddev: 0.000005801296241725242",
            "extra": "mean: 48.043874525512976 usec\nrounds: 16864"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6628.958756984736,
            "unit": "iter/sec",
            "range": "stddev: 0.000024217621373077705",
            "extra": "mean: 150.85325413230694 usec\nrounds: 3872"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1247914.4121424851,
            "unit": "iter/sec",
            "range": "stddev: 5.000103893875791e-7",
            "extra": "mean: 801.3370069852365 nsec\nrounds: 81301"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 12255.642690157149,
            "unit": "iter/sec",
            "range": "stddev: 0.000007329115840892885",
            "extra": "mean: 81.59506810712817 usec\nrounds: 2129"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1961.7654324290386,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049800846659875",
            "extra": "mean: 509.74493865039204 usec\nrounds: 1304"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1776740.147345416,
            "unit": "iter/sec",
            "range": "stddev: 1.6846458436960218e-7",
            "extra": "mean: 562.8285044914434 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 231296.5752854052,
            "unit": "iter/sec",
            "range": "stddev: 0.000002227226641732424",
            "extra": "mean: 4.323453552072977 usec\nrounds: 9150"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53370.82039074458,
            "unit": "iter/sec",
            "range": "stddev: 0.000003795670323776841",
            "extra": "mean: 18.736830213189254 usec\nrounds: 9294"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9606.439843580736,
            "unit": "iter/sec",
            "range": "stddev: 0.000009360755242363239",
            "extra": "mean: 104.09683673481024 usec\nrounds: 980"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1854.4483488871379,
            "unit": "iter/sec",
            "range": "stddev: 0.000043874794554524965",
            "extra": "mean: 539.2439215684299 usec\nrounds: 765"
          }
        ]
      }
    ]
  }
}