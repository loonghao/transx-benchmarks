window.BENCHMARK_DATA = {
  "lastUpdate": 1772501330449,
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
      }
    ]
  }
}