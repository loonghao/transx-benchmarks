window.BENCHMARK_DATA = {
  "lastUpdate": 1790345152861,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.7)": [
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
        "date": 1734017769023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2813.86183504751,
            "unit": "iter/sec",
            "range": "stddev: 0.00016283322391281895",
            "extra": "mean: 355.383476027392 usec\nrounds: 1168"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 63244.22775369646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017577066235028565",
            "extra": "mean: 15.81171967020425 usec\nrounds: 1698"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 57650.58508741278,
            "unit": "iter/sec",
            "range": "stddev: 0.000011037195555420493",
            "extra": "mean: 17.34587773018693 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 59430.115494157784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021334595823500822",
            "extra": "mean: 16.826485893306128 usec\nrounds: 28249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 850288.6609502076,
            "unit": "iter/sec",
            "range": "stddev: 2.1132053727915165e-7",
            "extra": "mean: 1.176071193143383 usec\nrounds: 3034"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 62299.98024343407,
            "unit": "iter/sec",
            "range": "stddev: 0.000005324761956898205",
            "extra": "mean: 16.051369456178794 usec\nrounds: 30304"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 626.4380224500592,
            "unit": "iter/sec",
            "range": "stddev: 0.0000665149489440178",
            "extra": "mean: 1.5963271132376418 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 1913.0008855714661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000539112012407971",
            "extra": "mean: 522.7389111747706 usec\nrounds: 1745"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 51329.961628416924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033371809999866716",
            "extra": "mean: 19.481799095021866 usec\nrounds: 27625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 15128.262813839165,
            "unit": "iter/sec",
            "range": "stddev: 0.000011364211811090175",
            "extra": "mean: 66.1014428626406 usec\nrounds: 10396"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1511.5226868029013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000646474009954505",
            "extra": "mean: 661.5845125786044 usec\nrounds: 1272"
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
        "date": 1734018610791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2744.2012724452334,
            "unit": "iter/sec",
            "range": "stddev: 0.00021962919771325107",
            "extra": "mean: 364.4047577854759 usec\nrounds: 1156"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 62645.109150100296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041698587992801975",
            "extra": "mean: 15.962938105893603 usec\nrounds: 1341"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 58472.48060716129,
            "unit": "iter/sec",
            "range": "stddev: 0.00000261367129520502",
            "extra": "mean: 17.102062194322695 usec\nrounds: 27398"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 59426.857409640375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021186874747669475",
            "extra": "mean: 16.82740840739422 usec\nrounds: 26667"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 888493.8688188749,
            "unit": "iter/sec",
            "range": "stddev: 1.1299906228177291e-7",
            "extra": "mean: 1.1255001695502487 usec\nrounds: 2949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 62445.26551726876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029592595557681756",
            "extra": "mean: 16.014024309392322 usec\nrounds: 22625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 656.1675815661789,
            "unit": "iter/sec",
            "range": "stddev: 0.00015771466560358856",
            "extra": "mean: 1.5240009230769096 msec\nrounds: 650"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 578.2888808057216,
            "unit": "iter/sec",
            "range": "stddev: 0.00014566776652618382",
            "extra": "mean: 1.7292395430579857 msec\nrounds: 569"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 42900.42518521645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026841475484950005",
            "extra": "mean: 23.309792284869975 usec\nrounds: 24938"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 769.3482200241231,
            "unit": "iter/sec",
            "range": "stddev: 0.00010832063190165183",
            "extra": "mean: 1.299801538461537 msec\nrounds: 585"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1512.3723921116875,
            "unit": "iter/sec",
            "range": "stddev: 0.00006093762410504108",
            "extra": "mean: 661.2128105589953 usec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 63771.83493919952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021222843215008398",
            "extra": "mean: 15.680903661520896 usec\nrounds: 39683"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 53046.65228516016,
            "unit": "iter/sec",
            "range": "stddev: 0.00000220713260270764",
            "extra": "mean: 18.851330987379775 usec\nrounds: 24155"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 32093.73296893193,
            "unit": "iter/sec",
            "range": "stddev: 0.000005964642441671428",
            "extra": "mean: 31.158731237903726 usec\nrounds: 19121"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 631.1997580858704,
            "unit": "iter/sec",
            "range": "stddev: 0.000059932553865441536",
            "extra": "mean: 1.5842845108694685 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 66.18674825218628,
            "unit": "iter/sec",
            "range": "stddev: 0.00023005279382588487",
            "extra": "mean: 15.108764615384592 msec\nrounds: 65"
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
        "date": 1734020582653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2595.8965083781436,
            "unit": "iter/sec",
            "range": "stddev: 0.00023408709078392902",
            "extra": "mean: 385.22336956521315 usec\nrounds: 1104"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1215483.6523823421,
            "unit": "iter/sec",
            "range": "stddev: 7.154111816140694e-8",
            "extra": "mean: 822.7177700333565 nsec\nrounds: 1435"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 452847.3938106665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032553064441424392",
            "extra": "mean: 2.2082494316354517 usec\nrounds: 12316"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 399603.6988112034,
            "unit": "iter/sec",
            "range": "stddev: 0.000003167662396489258",
            "extra": "mean: 2.502479338842305 usec\nrounds: 13794"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 861783.7268759465,
            "unit": "iter/sec",
            "range": "stddev: 6.929810125320585e-8",
            "extra": "mean: 1.1603839441539485 usec\nrounds: 2865"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1225347.2129298346,
            "unit": "iter/sec",
            "range": "stddev: 7.448821780040367e-8",
            "extra": "mean: 816.0952172967986 nsec\nrounds: 9158"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 17400.515489412544,
            "unit": "iter/sec",
            "range": "stddev: 0.000004223683672996149",
            "extra": "mean: 57.46956178444579 usec\nrounds: 7599"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4988.018282592443,
            "unit": "iter/sec",
            "range": "stddev: 0.000031414703607785304",
            "extra": "mean: 200.48041994751188 usec\nrounds: 1905"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1195663.6365543895,
            "unit": "iter/sec",
            "range": "stddev: 5.597810072108293e-7",
            "extra": "mean: 836.3556182755174 nsec\nrounds: 17007"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10095.902241054782,
            "unit": "iter/sec",
            "range": "stddev: 0.000040874150046915365",
            "extra": "mean: 99.05008746355726 usec\nrounds: 1715"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1414.8358388042525,
            "unit": "iter/sec",
            "range": "stddev: 0.00012432192179696557",
            "extra": "mean: 706.7957798165115 usec\nrounds: 1090"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1511489.6319395737,
            "unit": "iter/sec",
            "range": "stddev: 1.1501892478639777e-7",
            "extra": "mean: 661.5989808123161 nsec\nrounds: 76924"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 186379.52680397886,
            "unit": "iter/sec",
            "range": "stddev: 0.000006659515578840092",
            "extra": "mean: 5.365396173860507 usec\nrounds: 13643"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 49811.81774921191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040081984917545765",
            "extra": "mean: 20.075557271061875 usec\nrounds: 10363"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9634.415026699267,
            "unit": "iter/sec",
            "range": "stddev: 0.00000504169897970217",
            "extra": "mean: 103.79457364341903 usec\nrounds: 774"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1596.8647090351226,
            "unit": "iter/sec",
            "range": "stddev: 0.00003712656713765572",
            "extra": "mean: 626.2271276595701 usec\nrounds: 188"
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
        "date": 1734020624044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2609.011693813557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001864657683890397",
            "extra": "mean: 383.2868983957345 usec\nrounds: 1122"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1148679.245281076,
            "unit": "iter/sec",
            "range": "stddev: 3.1525045515608184e-7",
            "extra": "mean: 870.5650459935881 nsec\nrounds: 1522"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 415578.19935746037,
            "unit": "iter/sec",
            "range": "stddev: 0.000003296603394470361",
            "extra": "mean: 2.4062859927352642 usec\nrounds: 22574"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 376720.8458557415,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030152254877005832",
            "extra": "mean: 2.6544854392871375 usec\nrounds: 16208"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 852654.764664591,
            "unit": "iter/sec",
            "range": "stddev: 6.426052335762861e-8",
            "extra": "mean: 1.1728076138686332 usec\nrounds: 2942"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1111828.2571021977,
            "unit": "iter/sec",
            "range": "stddev: 6.44449408064735e-7",
            "extra": "mean: 899.419486428902 nsec\nrounds: 19121"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16888.11637415911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074183235976458335",
            "extra": "mean: 59.213234788583215 usec\nrounds: 5818"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4585.8409352966555,
            "unit": "iter/sec",
            "range": "stddev: 0.000039799905500604006",
            "extra": "mean: 218.06251331203458 usec\nrounds: 1878"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1105280.1178465148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010883586910904568",
            "extra": "mean: 904.7480216584023 nsec\nrounds: 16807"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 9694.778248323502,
            "unit": "iter/sec",
            "range": "stddev: 0.000021667329790344933",
            "extra": "mean: 103.14831081081488 usec\nrounds: 1776"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1335.262146941492,
            "unit": "iter/sec",
            "range": "stddev: 0.00010467248172259691",
            "extra": "mean: 748.9166095890365 usec\nrounds: 1168"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1492875.5481182735,
            "unit": "iter/sec",
            "range": "stddev: 2.2395260050532752e-7",
            "extra": "mean: 669.8482008500494 nsec\nrounds: 75758"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 167421.44365785053,
            "unit": "iter/sec",
            "range": "stddev: 0.000006998488721648053",
            "extra": "mean: 5.972950526239888 usec\nrounds: 13967"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 45785.98371904282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072678586720427645",
            "extra": "mean: 21.84074510960197 usec\nrounds: 10173"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 8416.964328369826,
            "unit": "iter/sec",
            "range": "stddev: 0.00005849510234014788",
            "extra": "mean: 118.80767946579584 usec\nrounds: 599"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1551.4290195649655,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504104004280436",
            "extra": "mean: 644.56703296707 usec\nrounds: 182"
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
        "date": 1772501326026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2369.8543566964045,
            "unit": "iter/sec",
            "range": "stddev: 0.000233984971082214",
            "extra": "mean: 421.96685934489574 usec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1199033.5246136102,
            "unit": "iter/sec",
            "range": "stddev: 1.0815438555452982e-7",
            "extra": "mean: 834.0050377842863 nsec\nrounds: 1588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 428160.16890474514,
            "unit": "iter/sec",
            "range": "stddev: 0.000004411503842041934",
            "extra": "mean: 2.3355745644394 usec\nrounds: 15899"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 382586.12687147665,
            "unit": "iter/sec",
            "range": "stddev: 0.000003228104564888223",
            "extra": "mean: 2.613790542216742 usec\nrounds: 16156"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 844493.2072672418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010097634800257809",
            "extra": "mean: 1.1841421474969278 usec\nrounds: 2617"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1185506.0506062277,
            "unit": "iter/sec",
            "range": "stddev: 7.083124146840279e-7",
            "extra": "mean: 843.5216332203735 nsec\nrounds: 17242"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16668.514709099545,
            "unit": "iter/sec",
            "range": "stddev: 0.000014113297480360483",
            "extra": "mean: 59.99334778485619 usec\nrounds: 7381"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4851.1037399938305,
            "unit": "iter/sec",
            "range": "stddev: 0.000028856209392315566",
            "extra": "mean: 206.13865495304205 usec\nrounds: 3301"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1201850.5851094483,
            "unit": "iter/sec",
            "range": "stddev: 5.05384757906681e-7",
            "extra": "mean: 832.0501835999302 nsec\nrounds: 16340"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10005.50211822565,
            "unit": "iter/sec",
            "range": "stddev: 0.000016871675465272906",
            "extra": "mean: 99.94500907440089 usec\nrounds: 1653"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1303.9880396790122,
            "unit": "iter/sec",
            "range": "stddev: 0.00007891510731239351",
            "extra": "mean: 766.8781994704174 usec\nrounds: 1133"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1538040.146391059,
            "unit": "iter/sec",
            "range": "stddev: 1.614243024168105e-7",
            "extra": "mean: 650.1780869287226 nsec\nrounds: 75188"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 182929.96995403143,
            "unit": "iter/sec",
            "range": "stddev: 0.000005070134136258041",
            "extra": "mean: 5.466572810629611 usec\nrounds: 13851"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 47875.44078494477,
            "unit": "iter/sec",
            "range": "stddev: 0.000004287884757650439",
            "extra": "mean: 20.887536148063344 usec\nrounds: 10374"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9655.39693559281,
            "unit": "iter/sec",
            "range": "stddev: 0.000020298201995108344",
            "extra": "mean: 103.56902017292397 usec\nrounds: 694"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1596.0034700204103,
            "unit": "iter/sec",
            "range": "stddev: 0.000017807444973529642",
            "extra": "mean: 626.5650537634556 usec\nrounds: 186"
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
        "date": 1772501444529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2941.117863903561,
            "unit": "iter/sec",
            "range": "stddev: 0.00020489273288336736",
            "extra": "mean: 340.0067750677502 usec\nrounds: 1107"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1181635.3887404352,
            "unit": "iter/sec",
            "range": "stddev: 8.202610133378001e-7",
            "extra": "mean: 846.2847419168364 nsec\nrounds: 1763"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 428523.1947337267,
            "unit": "iter/sec",
            "range": "stddev: 0.00000343160836950068",
            "extra": "mean: 2.333595969341576 usec\nrounds: 18657"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 373875.6021660565,
            "unit": "iter/sec",
            "range": "stddev: 0.000003377953214592695",
            "extra": "mean: 2.674686431012021 usec\nrounds: 18417"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 890272.9437598975,
            "unit": "iter/sec",
            "range": "stddev: 4.8613135899574e-7",
            "extra": "mean: 1.1232510288099864 usec\nrounds: 2916"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1217871.7416872317,
            "unit": "iter/sec",
            "range": "stddev: 3.700298726506491e-7",
            "extra": "mean: 821.1045266676492 nsec\nrounds: 20081"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16315.05591398601,
            "unit": "iter/sec",
            "range": "stddev: 0.000043979457997209555",
            "extra": "mean: 61.29307832422163 usec\nrounds: 6588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4655.909955921314,
            "unit": "iter/sec",
            "range": "stddev: 0.000046551085386842584",
            "extra": "mean: 214.78078602620218 usec\nrounds: 1603"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1229448.8373908028,
            "unit": "iter/sec",
            "range": "stddev: 2.9836808742060807e-7",
            "extra": "mean: 813.372602085866 nsec\nrounds: 12563"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10185.11211881546,
            "unit": "iter/sec",
            "range": "stddev: 0.000017517851282594196",
            "extra": "mean: 98.18252252252096 usec\nrounds: 1110"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1589.5827621858914,
            "unit": "iter/sec",
            "range": "stddev: 0.00007316562114722949",
            "extra": "mean: 629.0959010054089 usec\nrounds: 1293"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1432690.8509587874,
            "unit": "iter/sec",
            "range": "stddev: 7.481165411474264e-7",
            "extra": "mean: 697.9872868812124 nsec\nrounds: 135136"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 172471.26895085952,
            "unit": "iter/sec",
            "range": "stddev: 0.000013208142865515985",
            "extra": "mean: 5.798067156825522 usec\nrounds: 13193"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 49394.38300893857,
            "unit": "iter/sec",
            "range": "stddev: 0.000004714703596135473",
            "extra": "mean: 20.24521694742167 usec\nrounds: 9795"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9448.134138064102,
            "unit": "iter/sec",
            "range": "stddev: 0.00002395376051100063",
            "extra": "mean: 105.84100367195859 usec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1479.5098921061133,
            "unit": "iter/sec",
            "range": "stddev: 0.00008462642760830314",
            "extra": "mean: 675.8995024875969 usec\nrounds: 201"
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
        "date": 1772859200068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2247.488071245152,
            "unit": "iter/sec",
            "range": "stddev: 0.00024658689505421323",
            "extra": "mean: 444.9411824668687 usec\nrounds: 981"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1138412.5861846805,
            "unit": "iter/sec",
            "range": "stddev: 9.197817251211353e-7",
            "extra": "mean: 878.416149061948 nsec\nrounds: 1288"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 429881.78381814394,
            "unit": "iter/sec",
            "range": "stddev: 0.000003598365182921198",
            "extra": "mean: 2.3262209231527646 usec\nrounds: 8211"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 385926.1679504301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031489764462776923",
            "extra": "mean: 2.591169200344155 usec\nrounds: 16182"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 848663.8914991253,
            "unit": "iter/sec",
            "range": "stddev: 2.0024923984223398e-7",
            "extra": "mean: 1.178322784811248 usec\nrounds: 2528"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1224180.3532910366,
            "unit": "iter/sec",
            "range": "stddev: 5.756000500323305e-7",
            "extra": "mean: 816.8730998758808 nsec\nrounds: 17762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 17194.931454502763,
            "unit": "iter/sec",
            "range": "stddev: 0.000008222292131988493",
            "extra": "mean: 58.15667265938035 usec\nrounds: 7231"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4865.025764185235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348153476105147",
            "extra": "mean: 205.5487572875113 usec\nrounds: 3259"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1206164.573986148,
            "unit": "iter/sec",
            "range": "stddev: 5.831369136964481e-7",
            "extra": "mean: 829.0742586603977 nsec\nrounds: 16052"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10346.706592550967,
            "unit": "iter/sec",
            "range": "stddev: 0.000022169472949532182",
            "extra": "mean: 96.64911158493105 usec\nrounds: 1407"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1241.7121192486482,
            "unit": "iter/sec",
            "range": "stddev: 0.00007356784945280636",
            "extra": "mean: 805.3396471680517 usec\nrounds: 1077"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1587897.6286205284,
            "unit": "iter/sec",
            "range": "stddev: 1.5486442851571598e-7",
            "extra": "mean: 629.7635200000343 nsec\nrounds: 78125"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 180252.0461512651,
            "unit": "iter/sec",
            "range": "stddev: 0.000006605871547116471",
            "extra": "mean: 5.5477872310021565 usec\nrounds: 13987"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 48634.004634928264,
            "unit": "iter/sec",
            "range": "stddev: 0.000007426042899996894",
            "extra": "mean: 20.56174496643885 usec\nrounds: 10132"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9613.729646415579,
            "unit": "iter/sec",
            "range": "stddev: 0.000007472909747031814",
            "extra": "mean: 104.01790322581455 usec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1616.3599573759636,
            "unit": "iter/sec",
            "range": "stddev: 0.000021309278141455606",
            "extra": "mean: 618.6740740740838 usec\nrounds: 189"
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
        "date": 1772859235655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2290.3226161650273,
            "unit": "iter/sec",
            "range": "stddev: 0.00019976692411668767",
            "extra": "mean: 436.61971153846645 usec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1078687.1738550458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011514876156693112",
            "extra": "mean: 927.052832589238 nsec\nrounds: 1571"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 427915.25741527666,
            "unit": "iter/sec",
            "range": "stddev: 0.000003484235467110676",
            "extra": "mean: 2.3369112988404974 usec\nrounds: 18940"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 383527.2569684651,
            "unit": "iter/sec",
            "range": "stddev: 0.000003174167652230185",
            "extra": "mean: 2.607376612302221 usec\nrounds: 18762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 833305.9938992955,
            "unit": "iter/sec",
            "range": "stddev: 8.897318048413992e-7",
            "extra": "mean: 1.2000393700766412 usec\nrounds: 2540"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1159561.4455251065,
            "unit": "iter/sec",
            "range": "stddev: 5.856080249303847e-7",
            "extra": "mean: 862.3950061974945 nsec\nrounds: 21787"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16489.87681103977,
            "unit": "iter/sec",
            "range": "stddev: 0.00000903409154305763",
            "extra": "mean: 60.64326686361371 usec\nrounds: 8124"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4735.549652990569,
            "unit": "iter/sec",
            "range": "stddev: 0.00003596572621552431",
            "extra": "mean: 211.1687287173698 usec\nrounds: 1762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1179966.450995477,
            "unit": "iter/sec",
            "range": "stddev: 6.380503697410016e-7",
            "extra": "mean: 847.4817221763817 nsec\nrounds: 14772"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 9801.65297713753,
            "unit": "iter/sec",
            "range": "stddev: 0.000017482683400914448",
            "extra": "mean: 102.02360788863999 usec\nrounds: 1724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1232.856477923812,
            "unit": "iter/sec",
            "range": "stddev: 0.00008962307710621917",
            "extra": "mean: 811.1244235696006 usec\nrounds: 1171"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1479983.1083144906,
            "unit": "iter/sec",
            "range": "stddev: 2.2092924827529199e-7",
            "extra": "mean: 675.6833874533087 nsec\nrounds: 138889"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 175930.73466426818,
            "unit": "iter/sec",
            "range": "stddev: 0.000008686468161018334",
            "extra": "mean: 5.684055159027888 usec\nrounds: 14431"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 48894.2599849303,
            "unit": "iter/sec",
            "range": "stddev: 0.000004980180853704271",
            "extra": "mean: 20.45229849696488 usec\nrounds: 11377"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9544.723747415443,
            "unit": "iter/sec",
            "range": "stddev: 0.000022166846401120037",
            "extra": "mean: 104.76992592591102 usec\nrounds: 675"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1565.4470487535002,
            "unit": "iter/sec",
            "range": "stddev: 0.000018034055718255914",
            "extra": "mean: 638.7951612903536 usec\nrounds: 186"
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
        "date": 1772859503081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2318.827924925218,
            "unit": "iter/sec",
            "range": "stddev: 0.00018235280148217603",
            "extra": "mean: 431.25235350624376 usec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1177496.0380269026,
            "unit": "iter/sec",
            "range": "stddev: 8.054587273348282e-7",
            "extra": "mean: 849.2597577446394 nsec\nrounds: 1486"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 441200.4879372042,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033113969377495653",
            "extra": "mean: 2.2665432775820715 usec\nrounds: 21882"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 384110.6695324494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031527228371050855",
            "extra": "mean: 2.6034163571067395 usec\nrounds: 16421"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 845827.9009126885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010730605652930697",
            "extra": "mean: 1.1822736030827934 usec\nrounds: 2595"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1255722.0756809353,
            "unit": "iter/sec",
            "range": "stddev: 3.376098319185772e-7",
            "extra": "mean: 796.3545591549262 nsec\nrounds: 21232"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 17293.78075059775,
            "unit": "iter/sec",
            "range": "stddev: 0.000007842596118462834",
            "extra": "mean: 57.824255691771484 usec\nrounds: 7994"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4836.562444666398,
            "unit": "iter/sec",
            "range": "stddev: 0.00003367776593509352",
            "extra": "mean: 206.7584180790981 usec\nrounds: 3540"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1204455.0290185716,
            "unit": "iter/sec",
            "range": "stddev: 5.898256077636647e-7",
            "extra": "mean: 830.2510063948439 nsec\nrounds: 16892"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10150.814645886849,
            "unit": "iter/sec",
            "range": "stddev: 0.000016953316914670107",
            "extra": "mean: 98.51426066628102 usec\nrounds: 1711"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1274.0841022671216,
            "unit": "iter/sec",
            "range": "stddev: 0.00006646025163631302",
            "extra": "mean: 784.8775431861893 usec\nrounds: 1042"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1531917.492255522,
            "unit": "iter/sec",
            "range": "stddev: 2.6810127982367337e-7",
            "extra": "mean: 652.7766704508458 nsec\nrounds: 75758"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 179541.82496036944,
            "unit": "iter/sec",
            "range": "stddev: 0.000006702045126307148",
            "extra": "mean: 5.569732847601006 usec\nrounds: 9882"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 48899.11615499394,
            "unit": "iter/sec",
            "range": "stddev: 0.000004898780855519493",
            "extra": "mean: 20.450267379687034 usec\nrounds: 10846"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9758.009529367971,
            "unit": "iter/sec",
            "range": "stddev: 0.00000999133359069157",
            "extra": "mean: 102.47991631801268 usec\nrounds: 717"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1621.8683060189003,
            "unit": "iter/sec",
            "range": "stddev: 0.000015999988577703443",
            "extra": "mean: 616.5728723404419 usec\nrounds: 188"
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
        "date": 1772859553199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2299.4870199105935,
            "unit": "iter/sec",
            "range": "stddev: 0.00024178742847708986",
            "extra": "mean: 434.87960199004783 usec\nrounds: 1005"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1140527.577938073,
            "unit": "iter/sec",
            "range": "stddev: 5.725624127273513e-7",
            "extra": "mean: 876.7872161476982 nsec\nrounds: 1189"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 443226.4222731054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030116929339844814",
            "extra": "mean: 2.256183182562668 usec\nrounds: 19456"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 396516.1233633042,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030027049731546214",
            "extra": "mean: 2.5219655420764804 usec\nrounds: 18051"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 800251.0591592757,
            "unit": "iter/sec",
            "range": "stddev: 8.180425707964207e-7",
            "extra": "mean: 1.2496078431318487 usec\nrounds: 2550"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1142998.8713059325,
            "unit": "iter/sec",
            "range": "stddev: 6.76904398877131e-7",
            "extra": "mean: 874.8915026114161 nsec\nrounds: 15899"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 17238.98234394581,
            "unit": "iter/sec",
            "range": "stddev: 0.000006170253048017291",
            "extra": "mean: 58.00806451612801 usec\nrounds: 7502"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4842.784681360489,
            "unit": "iter/sec",
            "range": "stddev: 0.00003240354781216495",
            "extra": "mean: 206.4927651747401 usec\nrounds: 1631"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1185299.86361309,
            "unit": "iter/sec",
            "range": "stddev: 5.216880200173931e-7",
            "extra": "mean: 843.6683667133398 nsec\nrounds: 16078"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10382.429926415132,
            "unit": "iter/sec",
            "range": "stddev: 0.000020765729848065175",
            "extra": "mean: 96.31656626506914 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1247.4512095231933,
            "unit": "iter/sec",
            "range": "stddev: 0.00006938144335809905",
            "extra": "mean: 801.6345588235268 usec\nrounds: 952"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1544789.401631089,
            "unit": "iter/sec",
            "range": "stddev: 1.8567178485663458e-7",
            "extra": "mean: 647.3374292601196 nsec\nrounds: 76336"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 181707.64205919276,
            "unit": "iter/sec",
            "range": "stddev: 0.000005572353130029966",
            "extra": "mean: 5.503345861888636 usec\nrounds: 13569"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 47176.67061902864,
            "unit": "iter/sec",
            "range": "stddev: 0.000006563522715331913",
            "extra": "mean: 21.19691760521675 usec\nrounds: 10122"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9577.423283104521,
            "unit": "iter/sec",
            "range": "stddev: 0.000008885064272762877",
            "extra": "mean: 104.41221719458662 usec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1589.9291239406543,
            "unit": "iter/sec",
            "range": "stddev: 0.000051216036885752305",
            "extra": "mean: 628.9588541667132 usec\nrounds: 192"
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
        "date": 1772859554985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2725.9653673064126,
            "unit": "iter/sec",
            "range": "stddev: 0.00019429239373585183",
            "extra": "mean: 366.84251824817653 usec\nrounds: 1096"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1222565.8043633038,
            "unit": "iter/sec",
            "range": "stddev: 1.3477828214406104e-7",
            "extra": "mean: 817.9518815519192 nsec\nrounds: 1621"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 431627.33138881123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033510277602138132",
            "extra": "mean: 2.3168134343633513 usec\nrounds: 19532"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 380074.9935348482,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033163623978672237",
            "extra": "mean: 2.631059704032626 usec\nrounds: 17637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 900385.4135754937,
            "unit": "iter/sec",
            "range": "stddev: 5.436319794558718e-7",
            "extra": "mean: 1.1106354955584294 usec\nrounds: 3037"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1231310.9053795047,
            "unit": "iter/sec",
            "range": "stddev: 4.1259648496898667e-7",
            "extra": "mean: 812.1425674304315 nsec\nrounds: 19724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16348.360213464091,
            "unit": "iter/sec",
            "range": "stddev: 0.000005387276398354202",
            "extra": "mean: 61.168214239396654 usec\nrounds: 7711"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4777.663385052449,
            "unit": "iter/sec",
            "range": "stddev: 0.000031438711223578844",
            "extra": "mean: 209.3073369565198 usec\nrounds: 1472"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1237514.1805720797,
            "unit": "iter/sec",
            "range": "stddev: 3.7229164096413115e-7",
            "extra": "mean: 808.0715483500308 nsec\nrounds: 17890"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10067.36022221532,
            "unit": "iter/sec",
            "range": "stddev: 0.000026415239023698932",
            "extra": "mean: 99.330904817862 usec\nrounds: 1702"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1518.4161610228489,
            "unit": "iter/sec",
            "range": "stddev: 0.00007358555695918787",
            "extra": "mean: 658.5809777777729 usec\nrounds: 1125"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1437722.1465271625,
            "unit": "iter/sec",
            "range": "stddev: 2.230601570994646e-7",
            "extra": "mean: 695.5446867220998 nsec\nrounds: 136987"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 174986.76425068904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001075496653914693",
            "extra": "mean: 5.71471793470838 usec\nrounds: 14642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 49055.28571847167,
            "unit": "iter/sec",
            "range": "stddev: 0.000006483876903827926",
            "extra": "mean: 20.385163094126103 usec\nrounds: 10730"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9524.889979249561,
            "unit": "iter/sec",
            "range": "stddev: 0.000009784500714562398",
            "extra": "mean: 104.98808933001315 usec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1513.1045663334887,
            "unit": "iter/sec",
            "range": "stddev: 0.00011727905905278538",
            "extra": "mean: 660.8928571428286 usec\nrounds: 196"
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
        "date": 1790334688041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2236.0035611230364,
            "unit": "iter/sec",
            "range": "stddev: 0.00023297836127513687",
            "extra": "mean: 447.22647914645916 usec\nrounds: 1031"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1152186.8491541115,
            "unit": "iter/sec",
            "range": "stddev: 7.984624132040574e-7",
            "extra": "mean: 867.914783729878 nsec\nrounds: 1549"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 439262.5662599899,
            "unit": "iter/sec",
            "range": "stddev: 0.000003292381540476352",
            "extra": "mean: 2.276542725947018 usec\nrounds: 17858"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 385571.50946280773,
            "unit": "iter/sec",
            "range": "stddev: 0.000003078659367890088",
            "extra": "mean: 2.593552623722734 usec\nrounds: 16751"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 833388.9593463761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011648188177616093",
            "extra": "mean: 1.1999199038877313 usec\nrounds: 2497"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1209419.253367808,
            "unit": "iter/sec",
            "range": "stddev: 5.201808322791705e-7",
            "extra": "mean: 826.8431292253297 nsec\nrounds: 19532"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16732.872315681994,
            "unit": "iter/sec",
            "range": "stddev: 0.000007511272995980744",
            "extra": "mean: 59.76260268613913 usec\nrounds: 7669"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4749.388664275196,
            "unit": "iter/sec",
            "range": "stddev: 0.000036201053354208504",
            "extra": "mean: 210.55341448931722 usec\nrounds: 3368"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1204894.4302991927,
            "unit": "iter/sec",
            "range": "stddev: 6.962592911479359e-7",
            "extra": "mean: 829.9482301961389 nsec\nrounds: 16612"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 9913.858772707656,
            "unit": "iter/sec",
            "range": "stddev: 0.000017648831314253185",
            "extra": "mean: 100.86889705882726 usec\nrounds: 1360"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1221.0764013321902,
            "unit": "iter/sec",
            "range": "stddev: 0.00007406866588434217",
            "extra": "mean: 818.9495750708172 usec\nrounds: 1059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1564258.9602445152,
            "unit": "iter/sec",
            "range": "stddev: 1.2060230307903082e-7",
            "extra": "mean: 639.2803400301628 nsec\nrounds: 75758"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 165171.4719272036,
            "unit": "iter/sec",
            "range": "stddev: 0.000006646409401954551",
            "extra": "mean: 6.054314273113291 usec\nrounds: 13606"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 48233.24470181566,
            "unit": "iter/sec",
            "range": "stddev: 0.000006390164420389826",
            "extra": "mean: 20.732588200983226 usec\nrounds: 10289"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9476.383630152115,
            "unit": "iter/sec",
            "range": "stddev: 0.000006765244904199747",
            "extra": "mean: 105.52548725636048 usec\nrounds: 667"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1596.3941870872613,
            "unit": "iter/sec",
            "range": "stddev: 0.000016305363812761727",
            "extra": "mean: 626.411702127639 usec\nrounds: 188"
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
        "date": 1790334750731,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2639.394765200384,
            "unit": "iter/sec",
            "range": "stddev: 0.0002449598163101426",
            "extra": "mean: 378.8747379454924 usec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1136550.5895266891,
            "unit": "iter/sec",
            "range": "stddev: 7.636614012939525e-7",
            "extra": "mean: 879.8552472850724 nsec\nrounds: 1658"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 435646.60010000126,
            "unit": "iter/sec",
            "range": "stddev: 0.000003982577567220466",
            "extra": "mean: 2.2954385498944636 usec\nrounds: 15061"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 382714.06789185264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036354839475694734",
            "extra": "mean: 2.6129167540362803 usec\nrounds: 14307"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 876603.9093398403,
            "unit": "iter/sec",
            "range": "stddev: 3.028096755778172e-7",
            "extra": "mean: 1.140766073873761 usec\nrounds: 2924"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1175390.7584705653,
            "unit": "iter/sec",
            "range": "stddev: 4.918296891429224e-7",
            "extra": "mean: 850.780893752486 nsec\nrounds: 17544"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16844.226514695656,
            "unit": "iter/sec",
            "range": "stddev: 0.000007338444520384033",
            "extra": "mean: 59.367522701476105 usec\nrounds: 7048"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4802.969473530921,
            "unit": "iter/sec",
            "range": "stddev: 0.00003754471911716207",
            "extra": "mean: 208.20452961672606 usec\nrounds: 3444"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1169689.5056124453,
            "unit": "iter/sec",
            "range": "stddev: 4.496038656934153e-7",
            "extra": "mean: 854.9277352680048 nsec\nrounds: 15291"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10119.499094468758,
            "unit": "iter/sec",
            "range": "stddev: 0.000017654710563849382",
            "extra": "mean: 98.81912045889628 usec\nrounds: 1569"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1472.0363357504252,
            "unit": "iter/sec",
            "range": "stddev: 0.00006368064391230984",
            "extra": "mean: 679.3310570626729 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1494979.072224294,
            "unit": "iter/sec",
            "range": "stddev: 1.549016971306142e-7",
            "extra": "mean: 668.9056847545526 nsec\nrounds: 73530"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 182308.13961745295,
            "unit": "iter/sec",
            "range": "stddev: 0.00000663917377805912",
            "extra": "mean: 5.48521860899 usec\nrounds: 12854"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 47026.02545771396,
            "unit": "iter/sec",
            "range": "stddev: 0.000006571429637838852",
            "extra": "mean: 21.26482070867769 usec\nrounds: 9426"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9524.358394931825,
            "unit": "iter/sec",
            "range": "stddev: 0.000008416790105018248",
            "extra": "mean: 104.99394904460208 usec\nrounds: 628"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1560.11736108653,
            "unit": "iter/sec",
            "range": "stddev: 0.000017181452155427673",
            "extra": "mean: 640.9774193548867 usec\nrounds: 186"
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
        "date": 1790334756407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2234.1316091938875,
            "unit": "iter/sec",
            "range": "stddev: 0.0001975514114843318",
            "extra": "mean: 447.6012048192707 usec\nrounds: 996"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1200906.3444009142,
            "unit": "iter/sec",
            "range": "stddev: 1.7763457138295675e-7",
            "extra": "mean: 832.7044025226309 nsec\nrounds: 1590"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 431970.59261852637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033436047249005763",
            "extra": "mean: 2.31497240110301 usec\nrounds: 21740"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 381629.9240726872,
            "unit": "iter/sec",
            "range": "stddev: 0.000003082501770536371",
            "extra": "mean: 2.620339593206362 usec\nrounds: 16667"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 833718.2448068695,
            "unit": "iter/sec",
            "range": "stddev: 4.5240591309886374e-7",
            "extra": "mean: 1.1994459833749347 usec\nrounds: 2527"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1190410.5167403838,
            "unit": "iter/sec",
            "range": "stddev: 2.8584412828039074e-7",
            "extra": "mean: 840.0463419444819 nsec\nrounds: 20284"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16686.508408072812,
            "unit": "iter/sec",
            "range": "stddev: 0.00001145250368038697",
            "extra": "mean: 59.92865466787572 usec\nrounds: 7723"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4548.453045155491,
            "unit": "iter/sec",
            "range": "stddev: 0.00005006153486009298",
            "extra": "mean: 219.8549682875345 usec\nrounds: 1419"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1147697.524408114,
            "unit": "iter/sec",
            "range": "stddev: 4.6228242153374455e-7",
            "extra": "mean: 871.309712474736 nsec\nrounds: 17668"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10092.291348515684,
            "unit": "iter/sec",
            "range": "stddev: 0.00001859306257783201",
            "extra": "mean: 99.08552631579293 usec\nrounds: 1520"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1201.556997525962,
            "unit": "iter/sec",
            "range": "stddev: 0.00008605446408238362",
            "extra": "mean: 832.2534861509081 usec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1525231.9746678022,
            "unit": "iter/sec",
            "range": "stddev: 1.2949067386036234e-7",
            "extra": "mean: 655.6379728517385 nsec\nrounds: 74627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 177325.14909570964,
            "unit": "iter/sec",
            "range": "stddev: 0.000006725285619887918",
            "extra": "mean: 5.639358010409787 usec\nrounds: 13832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 48892.46488893512,
            "unit": "iter/sec",
            "range": "stddev: 0.00000691780617056114",
            "extra": "mean: 20.453049406930404 usec\nrounds: 10707"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9643.342440934031,
            "unit": "iter/sec",
            "range": "stddev: 0.00000804515881768915",
            "extra": "mean: 103.6984848484902 usec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1564.6355160421176,
            "unit": "iter/sec",
            "range": "stddev: 0.00004165421322551021",
            "extra": "mean: 639.1264864865061 usec\nrounds: 185"
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
        "date": 1790334775802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2175.2638407764543,
            "unit": "iter/sec",
            "range": "stddev: 0.00020635247127577687",
            "extra": "mean: 459.71434878587087 usec\nrounds: 906"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1158304.3550154632,
            "unit": "iter/sec",
            "range": "stddev: 1.95567619207628e-7",
            "extra": "mean: 863.3309506866614 nsec\nrounds: 1399"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 409716.56328144466,
            "unit": "iter/sec",
            "range": "stddev: 0.000003750984232915507",
            "extra": "mean: 2.4407116763621652 usec\nrounds: 22173"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 351543.52652401617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038041099257548127",
            "extra": "mean: 2.844597964547311 usec\nrounds: 14837"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 828027.6120910223,
            "unit": "iter/sec",
            "range": "stddev: 0.000001106190513228376",
            "extra": "mean: 1.2076891946570416 usec\nrounds: 2471"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1199768.2656723713,
            "unit": "iter/sec",
            "range": "stddev: 5.303839651445298e-7",
            "extra": "mean: 833.4942910325956 nsec\nrounds: 19881"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 16999.16869892061,
            "unit": "iter/sec",
            "range": "stddev: 0.000008234724883174249",
            "extra": "mean: 58.826406026754505 usec\nrounds: 7699"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4749.259965019822,
            "unit": "iter/sec",
            "range": "stddev: 0.00003581123601346822",
            "extra": "mean: 210.55912023460408 usec\nrounds: 1705"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1199464.390565634,
            "unit": "iter/sec",
            "range": "stddev: 4.4404315392659083e-7",
            "extra": "mean: 833.7054504206063 nsec\nrounds: 16751"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 10100.341093486493,
            "unit": "iter/sec",
            "range": "stddev: 0.000020237057449728707",
            "extra": "mean: 99.0065573770454 usec\nrounds: 1464"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1191.217205874225,
            "unit": "iter/sec",
            "range": "stddev: 0.00009024473106041733",
            "extra": "mean: 839.4774647887224 usec\nrounds: 1065"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1539625.5741486049,
            "unit": "iter/sec",
            "range": "stddev: 1.407334307008427e-7",
            "extra": "mean: 649.5085667520481 nsec\nrounds: 75758"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 180546.7882573672,
            "unit": "iter/sec",
            "range": "stddev: 0.000007172140297915348",
            "extra": "mean: 5.538730484501959 usec\nrounds: 13643"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 48504.39260026854,
            "unit": "iter/sec",
            "range": "stddev: 0.000005022066827470249",
            "extra": "mean: 20.616689466480683 usec\nrounds: 10965"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 9602.919287464776,
            "unit": "iter/sec",
            "range": "stddev: 0.000008589563400478521",
            "extra": "mean: 104.13499999998494 usec\nrounds: 680"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1561.3458801486881,
            "unit": "iter/sec",
            "range": "stddev: 0.00007358144351100083",
            "extra": "mean: 640.473076923077 usec\nrounds: 182"
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
        "date": 1790345149523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 275.57206414159396,
            "unit": "iter/sec",
            "range": "stddev: 0.0019738431945356804",
            "extra": "mean: 3.6288148550724713 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 38.94472263957979,
            "unit": "iter/sec",
            "range": "stddev: 0.0021193190377317745",
            "extra": "mean: 25.677420000000026 msec\nrounds: 40"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 21.705988050656273,
            "unit": "iter/sec",
            "range": "stddev: 0.0020812318471212267",
            "extra": "mean: 46.07023636363632 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 31.074949844167744,
            "unit": "iter/sec",
            "range": "stddev: 0.0030765706029629923",
            "extra": "mean: 32.18026111111113 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 246.73116924376916,
            "unit": "iter/sec",
            "range": "stddev: 0.0019972421793828144",
            "extra": "mean: 4.052994208494205 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2050.5883147910363,
            "unit": "iter/sec",
            "range": "stddev: 0.00006704988894633045",
            "extra": "mean: 487.6649265905449 usec\nrounds: 613"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4313.754673162614,
            "unit": "iter/sec",
            "range": "stddev: 0.00016202486924288593",
            "extra": "mean: 231.81661354581703 usec\nrounds: 2510"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1389277.0494481325,
            "unit": "iter/sec",
            "range": "stddev: 5.101445323975758e-7",
            "extra": "mean: 719.7988337871367 nsec\nrounds: 101011"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 649307.9647879169,
            "unit": "iter/sec",
            "range": "stddev: 1.5539587978865738e-7",
            "extra": "mean: 1.5401012373637362 usec\nrounds: 1778"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 554214.487241553,
            "unit": "iter/sec",
            "range": "stddev: 7.141907857663808e-7",
            "extra": "mean: 1.8043555753607583 usec\nrounds: 17954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1076853.192512391,
            "unit": "iter/sec",
            "range": "stddev: 3.4221703581565053e-7",
            "extra": "mean: 928.6316899585116 nsec\nrounds: 3793"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1444513.1067454196,
            "unit": "iter/sec",
            "range": "stddev: 3.157937352367165e-7",
            "extra": "mean: 692.2747847217973 nsec\nrounds: 108696"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20786.148771428307,
            "unit": "iter/sec",
            "range": "stddev: 0.000005793335702881663",
            "extra": "mean: 48.10896000968465 usec\nrounds: 16529"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 7188.420628570634,
            "unit": "iter/sec",
            "range": "stddev: 0.00001659413949624443",
            "extra": "mean: 139.1126162018767 usec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1468487.860951551,
            "unit": "iter/sec",
            "range": "stddev: 3.8549309091594647e-7",
            "extra": "mean: 680.972602219551 nsec\nrounds: 105264"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13868.77570092259,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058131480222133365",
            "extra": "mean: 72.10441797926526 usec\nrounds: 2603"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2416.348125068029,
            "unit": "iter/sec",
            "range": "stddev: 0.00005990185797364741",
            "extra": "mean: 413.8476528384528 usec\nrounds: 1832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1739964.279661336,
            "unit": "iter/sec",
            "range": "stddev: 1.1529972714859803e-7",
            "extra": "mean: 574.7244421573246 nsec\nrounds: 161291"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 222070.80852025156,
            "unit": "iter/sec",
            "range": "stddev: 8.772503482883631e-7",
            "extra": "mean: 4.503068218031033 usec\nrounds: 12548"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 58730.0013456757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037324434803981345",
            "extra": "mean: 17.02707265600344 usec\nrounds: 9951"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11072.446758515078,
            "unit": "iter/sec",
            "range": "stddev: 0.000006712481661422454",
            "extra": "mean: 90.31427486711254 usec\nrounds: 1317"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1894.2961143791097,
            "unit": "iter/sec",
            "range": "stddev: 0.000014532802294509408",
            "extra": "mean: 527.9005707762686 usec\nrounds: 876"
          }
        ]
      }
    ]
  }
}