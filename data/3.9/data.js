window.BENCHMARK_DATA = {
  "lastUpdate": 1772859547773,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.9)": [
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
        "date": 1734017764015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2968.766165837011,
            "unit": "iter/sec",
            "range": "stddev: 0.00016974838819639032",
            "extra": "mean: 336.84027105518464 usec\nrounds: 1033"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 68774.13567394683,
            "unit": "iter/sec",
            "range": "stddev: 0.000003693676535594876",
            "extra": "mean: 14.5403499469761 usec\nrounds: 1886"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 67924.51689073439,
            "unit": "iter/sec",
            "range": "stddev: 0.000002022731887953131",
            "extra": "mean: 14.722224695519479 usec\nrounds: 31447"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 67944.10252042682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020649122191559395",
            "extra": "mean: 14.717980853442848 usec\nrounds: 33113"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 935054.2358914415,
            "unit": "iter/sec",
            "range": "stddev: 1.2565164440076077e-7",
            "extra": "mean: 1.069456681351368 usec\nrounds: 3405"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 71466.45396218837,
            "unit": "iter/sec",
            "range": "stddev: 0.000003900019454273003",
            "extra": "mean: 13.992578959200664 usec\nrounds: 35588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 771.6192307834694,
            "unit": "iter/sec",
            "range": "stddev: 0.00003522565853322005",
            "extra": "mean: 1.295975994513048 msec\nrounds: 729"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2272.053230593845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005571570886733677",
            "extra": "mean: 440.1305332703982 usec\nrounds: 2119"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 60807.37099506997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028636918453156326",
            "extra": "mean: 16.44537469118795 usec\nrounds: 32787"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 17826.601196986132,
            "unit": "iter/sec",
            "range": "stddev: 0.000012049027853534359",
            "extra": "mean: 56.09594274028331 usec\nrounds: 12225"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1658.2415182451086,
            "unit": "iter/sec",
            "range": "stddev: 0.00006756312841992779",
            "extra": "mean: 603.0484636871741 usec\nrounds: 1432"
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
        "date": 1734018611016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2995.830892790377,
            "unit": "iter/sec",
            "range": "stddev: 0.00022653073642043805",
            "extra": "mean: 333.79721212120216 usec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 67177.80740914348,
            "unit": "iter/sec",
            "range": "stddev: 0.00004497685745234836",
            "extra": "mean: 14.885868392660448 usec\nrounds: 1854"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 67885.47822902778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016796440141358082",
            "extra": "mean: 14.730690953170612 usec\nrounds: 31348"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 68644.4805278321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021154671043904314",
            "extra": "mean: 14.567813643728387 usec\nrounds: 33334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 977967.8893727766,
            "unit": "iter/sec",
            "range": "stddev: 8.814313249629561e-8",
            "extra": "mean: 1.0225284601535882 usec\nrounds: 3338"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 72661.5906094217,
            "unit": "iter/sec",
            "range": "stddev: 0.000004689041145583386",
            "extra": "mean: 13.762429250624391 usec\nrounds: 35336"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 768.9236217094817,
            "unit": "iter/sec",
            "range": "stddev: 0.00008917503015530225",
            "extra": "mean: 1.3005192866578688 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 677.358948722486,
            "unit": "iter/sec",
            "range": "stddev: 0.00008112240621826623",
            "extra": "mean: 1.4763221212121314 msec\nrounds: 660"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 51533.55647086026,
            "unit": "iter/sec",
            "range": "stddev: 0.000002054013062618913",
            "extra": "mean: 19.404831889789165 usec\nrounds: 29326"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 895.1761903760761,
            "unit": "iter/sec",
            "range": "stddev: 0.000059909818550551584",
            "extra": "mean: 1.1170985228951251 msec\nrounds: 677"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1659.447521499951,
            "unit": "iter/sec",
            "range": "stddev: 0.00006148621939804204",
            "extra": "mean: 602.6101983002839 usec\nrounds: 1412"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 73436.29659829414,
            "unit": "iter/sec",
            "range": "stddev: 0.000001934770397295709",
            "extra": "mean: 13.617244418929875 usec\nrounds: 48781"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 59899.01981382817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037373332815811757",
            "extra": "mean: 16.694764006290832 usec\nrounds: 26738"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 33179.033036300956,
            "unit": "iter/sec",
            "range": "stddev: 0.000005889726237056102",
            "extra": "mean: 30.139516088546245 usec\nrounds: 19921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 731.31590386543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004008881528875585",
            "extra": "mean: 1.3673981308411567 msec\nrounds: 428"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 75.88077854892876,
            "unit": "iter/sec",
            "range": "stddev: 0.0003977297004722368",
            "extra": "mean: 13.178568000000013 msec\nrounds: 75"
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
        "date": 1734020568503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2968.2221922330373,
            "unit": "iter/sec",
            "range": "stddev: 0.0001866326580863609",
            "extra": "mean: 336.9020023557216 usec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1306827.3092384085,
            "unit": "iter/sec",
            "range": "stddev: 1.1592454666188152e-7",
            "extra": "mean: 765.212046710884 nsec\nrounds: 1627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 483153.17319959775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036839808421161494",
            "extra": "mean: 2.069737001575865 usec\nrounds: 16502"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 439434.6077430831,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032177802015219963",
            "extra": "mean: 2.275651444787101 usec\nrounds: 15504"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 955578.8127214868,
            "unit": "iter/sec",
            "range": "stddev: 5.94581823458624e-8",
            "extra": "mean: 1.0464861575907087 usec\nrounds: 3287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1324214.3548662,
            "unit": "iter/sec",
            "range": "stddev: 1.813325949931189e-7",
            "extra": "mean: 755.1647483092275 nsec\nrounds: 20243"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19512.669951145886,
            "unit": "iter/sec",
            "range": "stddev: 0.000008304636305334908",
            "extra": "mean: 51.24875286179248 usec\nrounds: 8299"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5189.172662430545,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018577082861609",
            "extra": "mean: 192.70894708128912 usec\nrounds: 1833"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1297114.1504617883,
            "unit": "iter/sec",
            "range": "stddev: 2.009300325001968e-7",
            "extra": "mean: 770.942171623051 nsec\nrounds: 18797"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11513.579702868692,
            "unit": "iter/sec",
            "range": "stddev: 0.000018226750905897593",
            "extra": "mean: 86.85396078431131 usec\nrounds: 1275"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1638.6290005745377,
            "unit": "iter/sec",
            "range": "stddev: 0.00008624682883778336",
            "extra": "mean: 610.2662650602296 usec\nrounds: 1162"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1749643.2484971315,
            "unit": "iter/sec",
            "range": "stddev: 6.830411181481488e-8",
            "extra": "mean: 571.5450854675105 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 214868.89244783053,
            "unit": "iter/sec",
            "range": "stddev: 0.000007448170715534183",
            "extra": "mean: 4.654000812345588 usec\nrounds: 14772"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53329.000114501636,
            "unit": "iter/sec",
            "range": "stddev: 0.000007212375473472517",
            "extra": "mean: 18.751523521028332 usec\nrounds: 11224"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11308.666168436348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074410025717183116",
            "extra": "mean: 88.42775842044954 usec\nrounds: 861"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1872.8638970315128,
            "unit": "iter/sec",
            "range": "stddev: 0.000010856564209067329",
            "extra": "mean: 533.9416289592634 usec\nrounds: 221"
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
        "date": 1734020606272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2926.360164066013,
            "unit": "iter/sec",
            "range": "stddev: 0.00021441917669237894",
            "extra": "mean: 341.72143684820946 usec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1266421.4398293614,
            "unit": "iter/sec",
            "range": "stddev: 6.700004749666447e-8",
            "extra": "mean: 789.6265560181457 nsec\nrounds: 1687"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 480171.13412268856,
            "unit": "iter/sec",
            "range": "stddev: 0.000003287521354922029",
            "extra": "mean: 2.0825908284284536 usec\nrounds: 21414"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 437711.1990449837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031168783268713933",
            "extra": "mean: 2.2846114108614106 usec\nrounds: 17422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 965940.8151872393,
            "unit": "iter/sec",
            "range": "stddev: 1.2611445086400762e-7",
            "extra": "mean: 1.0352601156067296 usec\nrounds: 3287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1260194.846139094,
            "unit": "iter/sec",
            "range": "stddev: 4.2188805605580414e-7",
            "extra": "mean: 793.5280826324099 nsec\nrounds: 18588"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20201.23908837844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035246559408003806",
            "extra": "mean: 49.50191399770569 usec\nrounds: 7837"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5280.531225682635,
            "unit": "iter/sec",
            "range": "stddev: 0.00003806007895626806",
            "extra": "mean: 189.37488621151488 usec\nrounds: 3735"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1246956.0380686084,
            "unit": "iter/sec",
            "range": "stddev: 6.542375916272812e-8",
            "extra": "mean: 801.9528912574056 nsec\nrounds: 18383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11511.221505558817,
            "unit": "iter/sec",
            "range": "stddev: 0.00001611002731854824",
            "extra": "mean: 86.87175375064201 usec\nrounds: 1933"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1599.3011851126148,
            "unit": "iter/sec",
            "range": "stddev: 0.00008385866162931889",
            "extra": "mean: 625.2730938416612 usec\nrounds: 1364"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1718908.6875893977,
            "unit": "iter/sec",
            "range": "stddev: 8.07098249634168e-8",
            "extra": "mean: 581.7644690610836 nsec\nrounds: 81968"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 214723.97274865964,
            "unit": "iter/sec",
            "range": "stddev: 0.00000804826999764012",
            "extra": "mean: 4.657141851462145 usec\nrounds: 14205"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53314.91116774044,
            "unit": "iter/sec",
            "range": "stddev: 0.000005780050335249934",
            "extra": "mean: 18.756478780463123 usec\nrounds: 10627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11737.454664590156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067032052498467385",
            "extra": "mean: 85.19734717415564 usec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1873.2846632771277,
            "unit": "iter/sec",
            "range": "stddev: 0.00004587305583975843",
            "extra": "mean: 533.8216981131945 usec\nrounds: 212"
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
        "date": 1772501302689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3264.6427704294565,
            "unit": "iter/sec",
            "range": "stddev: 0.00018206980699678223",
            "extra": "mean: 306.31222780569414 usec\nrounds: 1194"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1374659.0992844792,
            "unit": "iter/sec",
            "range": "stddev: 3.2421447008080957e-7",
            "extra": "mean: 727.4530831102111 nsec\nrounds: 1865"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 492206.6449394811,
            "unit": "iter/sec",
            "range": "stddev: 0.000003850961597684723",
            "extra": "mean: 2.0316670046641776 usec\nrounds: 19724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 437034.38285165996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038331042944560225",
            "extra": "mean: 2.288149489463451 usec\nrounds: 19881"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1056826.2621526357,
            "unit": "iter/sec",
            "range": "stddev: 4.3988819272594123e-7",
            "extra": "mean: 946.2293243575468 nsec\nrounds: 3567"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1414138.143197166,
            "unit": "iter/sec",
            "range": "stddev: 3.8476443254266685e-7",
            "extra": "mean: 707.1444927856494 nsec\nrounds: 21835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20250.4874844616,
            "unit": "iter/sec",
            "range": "stddev: 0.000007059521726167464",
            "extra": "mean: 49.381527272729116 usec\nrounds: 9625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5364.730048702293,
            "unit": "iter/sec",
            "range": "stddev: 0.00003593980892916865",
            "extra": "mean: 186.4026690852592 usec\nrounds: 3859"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1407051.4376322185,
            "unit": "iter/sec",
            "range": "stddev: 2.961317444773888e-7",
            "extra": "mean: 710.7060717572605 nsec\nrounds: 17392"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11856.715561746814,
            "unit": "iter/sec",
            "range": "stddev: 0.000018108297813555182",
            "extra": "mean: 84.3403887689006 usec\nrounds: 1389"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1803.6138957734238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000700052235989445",
            "extra": "mean: 554.4423905489933 usec\nrounds: 1439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1672362.688415696,
            "unit": "iter/sec",
            "range": "stddev: 1.1751611197016555e-7",
            "extra": "mean: 597.9564163486438 nsec\nrounds: 83334"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 209127.8613704798,
            "unit": "iter/sec",
            "range": "stddev: 0.000008300834685260147",
            "extra": "mean: 4.781763622726735 usec\nrounds: 14663"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54234.261324745275,
            "unit": "iter/sec",
            "range": "stddev: 0.000004880938113749298",
            "extra": "mean: 18.43852899576109 usec\nrounds: 10605"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 12166.35881516715,
            "unit": "iter/sec",
            "range": "stddev: 0.000006989974500519808",
            "extra": "mean: 82.19386056190892 usec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1873.6610300031302,
            "unit": "iter/sec",
            "range": "stddev: 0.000013454670781854478",
            "extra": "mean: 533.7144680851527 usec\nrounds: 235"
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
        "date": 1772501330203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2535.8412530655046,
            "unit": "iter/sec",
            "range": "stddev: 0.0002790083770705328",
            "extra": "mean: 394.34645161290325 usec\nrounds: 465"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1340206.185566341,
            "unit": "iter/sec",
            "range": "stddev: 1.7363051399949282e-7",
            "extra": "mean: 746.1538461542187 nsec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 489246.5346374971,
            "unit": "iter/sec",
            "range": "stddev: 0.000004205872544975563",
            "extra": "mean: 2.0439592908735493 usec\nrounds: 21322"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 443650.06571902655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032176893472592278",
            "extra": "mean: 2.254028743079962 usec\nrounds: 16978"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 978164.7952305636,
            "unit": "iter/sec",
            "range": "stddev: 8.89600874420078e-7",
            "extra": "mean: 1.0223226238317948 usec\nrounds: 2988"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1330259.3894123733,
            "unit": "iter/sec",
            "range": "stddev: 9.9877810129508e-7",
            "extra": "mean: 751.7330890193817 nsec\nrounds: 19647"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20342.43433819021,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047388473896563854",
            "extra": "mean: 49.15832507433159 usec\nrounds: 8072"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5268.6534852652,
            "unit": "iter/sec",
            "range": "stddev: 0.00003669423402947823",
            "extra": "mean: 189.80181611804454 usec\nrounds: 1762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1355064.4757969363,
            "unit": "iter/sec",
            "range": "stddev: 3.9698703432973886e-7",
            "extra": "mean: 737.9722646864335 nsec\nrounds: 18316"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11381.526724672749,
            "unit": "iter/sec",
            "range": "stddev: 0.000017621892955123858",
            "extra": "mean: 87.86167481663166 usec\nrounds: 1636"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1419.7392336755788,
            "unit": "iter/sec",
            "range": "stddev: 0.00007363341027237413",
            "extra": "mean: 704.3546985815759 usec\nrounds: 1128"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1750397.8642406163,
            "unit": "iter/sec",
            "range": "stddev: 1.5817268133263802e-7",
            "extra": "mean: 571.2986861040971 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 210887.32030017473,
            "unit": "iter/sec",
            "range": "stddev: 0.000007477314408198276",
            "extra": "mean: 4.741868778912885 usec\nrounds: 14266"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53027.87600571916,
            "unit": "iter/sec",
            "range": "stddev: 0.000004976304483256836",
            "extra": "mean: 18.858005926772325 usec\nrounds: 10461"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11542.369803122318,
            "unit": "iter/sec",
            "range": "stddev: 0.00000855165515181372",
            "extra": "mean: 86.63732119633619 usec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1873.1257851880905,
            "unit": "iter/sec",
            "range": "stddev: 0.000046567455621515895",
            "extra": "mean: 533.8669767442152 usec\nrounds: 215"
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
        "date": 1772859196128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2418.720189097379,
            "unit": "iter/sec",
            "range": "stddev: 0.00020941551337085783",
            "extra": "mean: 413.4417881438288 usec\nrounds: 1029"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1348509.8618552382,
            "unit": "iter/sec",
            "range": "stddev: 4.801605057131849e-7",
            "extra": "mean: 741.5592783461227 nsec\nrounds: 1552"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 492819.5677334916,
            "unit": "iter/sec",
            "range": "stddev: 0.000003418901315026687",
            "extra": "mean: 2.0291402076404217 usec\nrounds: 19842"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 442674.8453872881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032240507578717207",
            "extra": "mean: 2.2589944073400385 usec\nrounds: 18417"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 943251.5337448833,
            "unit": "iter/sec",
            "range": "stddev: 3.6159060546090527e-7",
            "extra": "mean: 1.060162601623148 usec\nrounds: 2583"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1342324.7766115493,
            "unit": "iter/sec",
            "range": "stddev: 4.152395625826491e-7",
            "extra": "mean: 744.9761916220566 nsec\nrounds: 20791"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 20490.533120020726,
            "unit": "iter/sec",
            "range": "stddev: 0.000008396211006354046",
            "extra": "mean: 48.8030249941583 usec\nrounds: 8562"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5166.261758774724,
            "unit": "iter/sec",
            "range": "stddev: 0.00004256786834914709",
            "extra": "mean: 193.56355653128364 usec\nrounds: 1822"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1376743.8409005937,
            "unit": "iter/sec",
            "range": "stddev: 5.171595564824514e-7",
            "extra": "mean: 726.3515334456498 nsec\nrounds: 18553"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11369.289609520894,
            "unit": "iter/sec",
            "range": "stddev: 0.00002192148432986614",
            "extra": "mean: 87.95624303233316 usec\nrounds: 1794"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1349.0263117718707,
            "unit": "iter/sec",
            "range": "stddev: 0.00007442859032143677",
            "extra": "mean: 741.275386012713 usec\nrounds: 1101"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1779407.3275576322,
            "unit": "iter/sec",
            "range": "stddev: 1.576908332717173e-7",
            "extra": "mean: 561.9848724423225 nsec\nrounds: 84746"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 218383.5981695515,
            "unit": "iter/sec",
            "range": "stddev: 0.00000644545618127755",
            "extra": "mean: 4.5790984688493275 usec\nrounds: 15152"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53667.916722180875,
            "unit": "iter/sec",
            "range": "stddev: 0.000006825635955789831",
            "extra": "mean: 18.633106352471877 usec\nrounds: 11161"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11387.946913731224,
            "unit": "iter/sec",
            "range": "stddev: 0.00001026955377593546",
            "extra": "mean: 87.8121409921776 usec\nrounds: 766"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1914.9980251582474,
            "unit": "iter/sec",
            "range": "stddev: 0.00002647065660746881",
            "extra": "mean: 522.1937500000107 usec\nrounds: 208"
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
        "date": 1772859221562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2476.3653472211313,
            "unit": "iter/sec",
            "range": "stddev: 0.0002493722692818383",
            "extra": "mean: 403.8176358436594 usec\nrounds: 1049"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1245961.7567486847,
            "unit": "iter/sec",
            "range": "stddev: 5.403627206558963e-7",
            "extra": "mean: 802.5928521349504 nsec\nrounds: 1427"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 487464.1511694035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034121779077007873",
            "extra": "mean: 2.051432905580948 usec\nrounds: 24391"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 400552.74975474324,
            "unit": "iter/sec",
            "range": "stddev: 0.000003725529391555151",
            "extra": "mean: 2.496550081387023 usec\nrounds: 25189"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 904082.7569317707,
            "unit": "iter/sec",
            "range": "stddev: 7.882755654926044e-7",
            "extra": "mean: 1.106093432634141 usec\nrounds: 2954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1323519.5147260544,
            "unit": "iter/sec",
            "range": "stddev: 2.5567232212862843e-7",
            "extra": "mean: 755.5612054628319 nsec\nrounds: 29499"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19830.961223668513,
            "unit": "iter/sec",
            "range": "stddev: 0.000007449149865947742",
            "extra": "mean: 50.42619914996793 usec\nrounds: 9882"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5239.478363355641,
            "unit": "iter/sec",
            "range": "stddev: 0.00003176941717600299",
            "extra": "mean: 190.85869444444978 usec\nrounds: 3600"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1324573.3272905562,
            "unit": "iter/sec",
            "range": "stddev: 2.995969450412377e-7",
            "extra": "mean: 754.9600912208629 nsec\nrounds: 18417"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11153.500496968716,
            "unit": "iter/sec",
            "range": "stddev: 0.000021159925537724425",
            "extra": "mean: 89.65795090714154 usec\nrounds: 1874"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1378.5266420650294,
            "unit": "iter/sec",
            "range": "stddev: 0.00006316737294260785",
            "extra": "mean: 725.4121679520119 usec\nrounds: 1167"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1684682.8966284147,
            "unit": "iter/sec",
            "range": "stddev: 1.4471294794467618e-7",
            "extra": "mean: 593.5835177060362 nsec\nrounds: 80001"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 215146.60964278263,
            "unit": "iter/sec",
            "range": "stddev: 0.000006765500554494218",
            "extra": "mean: 4.64799329936151 usec\nrounds: 14327"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53835.12317559087,
            "unit": "iter/sec",
            "range": "stddev: 0.000004493752645669337",
            "extra": "mean: 18.575233806716827 usec\nrounds: 11548"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 10993.13447639186,
            "unit": "iter/sec",
            "range": "stddev: 0.000024481529987836466",
            "extra": "mean: 90.96586620927225 usec\nrounds: 583"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1850.9160312571846,
            "unit": "iter/sec",
            "range": "stddev: 0.000018476906972883174",
            "extra": "mean: 540.2730232558292 usec\nrounds: 215"
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
        "date": 1772859496906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2456.003283665873,
            "unit": "iter/sec",
            "range": "stddev: 0.00018653517953522963",
            "extra": "mean: 407.16557939913775 usec\nrounds: 1165"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1312484.404887123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011155387812825513",
            "extra": "mean: 761.9138149576737 nsec\nrounds: 1578"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 496098.5199884019,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034313874071540275",
            "extra": "mean: 2.01572865007414 usec\nrounds: 21979"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 441799.93810263166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032697850235804886",
            "extra": "mean: 2.2634679495308045 usec\nrounds: 23697"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 926391.9471547009,
            "unit": "iter/sec",
            "range": "stddev: 3.9806629444111646e-7",
            "extra": "mean: 1.0794567062800764 usec\nrounds: 2356"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1352154.1232941656,
            "unit": "iter/sec",
            "range": "stddev: 3.8950451504918393e-7",
            "extra": "mean: 739.5606630727603 nsec\nrounds: 29499"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 19647.983118085136,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066697130750638",
            "extra": "mean: 50.89580920290706 usec\nrounds: 9497"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5157.529063276607,
            "unit": "iter/sec",
            "range": "stddev: 0.00004242150385906098",
            "extra": "mean: 193.89129711751818 usec\nrounds: 1804"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1311850.8577385326,
            "unit": "iter/sec",
            "range": "stddev: 4.175741769682363e-7",
            "extra": "mean: 762.2817747162779 nsec\nrounds: 17986"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11205.472586197735,
            "unit": "iter/sec",
            "range": "stddev: 0.00001686202148256258",
            "extra": "mean: 89.24210847044 usec\nrounds: 1641"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1366.9255815129238,
            "unit": "iter/sec",
            "range": "stddev: 0.00008315775547626045",
            "extra": "mean: 731.5687214611876 usec\nrounds: 1314"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1707451.2855851387,
            "unit": "iter/sec",
            "range": "stddev: 1.7891466120721054e-7",
            "extra": "mean: 585.6682462578178 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 212033.55638445026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046393892886227",
            "extra": "mean: 4.716234623668917 usec\nrounds: 14389"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53131.11091618498,
            "unit": "iter/sec",
            "range": "stddev: 0.000004816314186548252",
            "extra": "mean: 18.821364408839727 usec\nrounds: 8238"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11355.900595690087,
            "unit": "iter/sec",
            "range": "stddev: 0.000006518586999307442",
            "extra": "mean: 88.05994659547571 usec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1865.9918582901917,
            "unit": "iter/sec",
            "range": "stddev: 0.000016074119843950667",
            "extra": "mean: 535.9080188679386 usec\nrounds: 212"
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
        "date": 1772859533028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2492.7032344569475,
            "unit": "iter/sec",
            "range": "stddev: 0.00025204921994019736",
            "extra": "mean: 401.1708999999981 usec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1342264.6983463583,
            "unit": "iter/sec",
            "range": "stddev: 1.0004237287743339e-7",
            "extra": "mean: 745.0095359223698 nsec\nrounds: 1573"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 481763.9820517284,
            "unit": "iter/sec",
            "range": "stddev: 0.000003369501706730971",
            "extra": "mean: 2.0757051943593137 usec\nrounds: 23256"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 436420.2866073465,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032640606563658744",
            "extra": "mean: 2.291369193155116 usec\nrounds: 20450"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 926852.1412940397,
            "unit": "iter/sec",
            "range": "stddev: 5.241071768371997e-7",
            "extra": "mean: 1.0789207419900153 usec\nrounds: 2372"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1209008.25527232,
            "unit": "iter/sec",
            "range": "stddev: 8.798737066909176e-7",
            "extra": "mean: 827.1242116330774 nsec\nrounds: 22832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 14986.630631666123,
            "unit": "iter/sec",
            "range": "stddev: 0.000030771873460927997",
            "extra": "mean: 66.72613908873164 usec\nrounds: 8757"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 4625.781019549043,
            "unit": "iter/sec",
            "range": "stddev: 0.00007451705392139368",
            "extra": "mean: 216.17971014492335 usec\nrounds: 3726"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1320456.3665169054,
            "unit": "iter/sec",
            "range": "stddev: 6.99628156692212e-7",
            "extra": "mean: 757.3139297573279 nsec\nrounds: 18622"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 9637.083999859977,
            "unit": "iter/sec",
            "range": "stddev: 0.000039189749104769664",
            "extra": "mean: 103.76582792206953 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1320.5553211959432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000993289582680639",
            "extra": "mean: 757.2571810883042 usec\nrounds: 1121"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1710945.5383334209,
            "unit": "iter/sec",
            "range": "stddev: 1.5775138227523494e-7",
            "extra": "mean: 584.4721398753597 nsec\nrounds: 82645"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 156233.8955291615,
            "unit": "iter/sec",
            "range": "stddev: 0.000009075833651539492",
            "extra": "mean: 6.400659707120643 usec\nrounds: 13794"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 51076.67617515755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068765098370925554",
            "extra": "mean: 19.578407893471653 usec\nrounds: 10439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11002.3690584994,
            "unit": "iter/sec",
            "range": "stddev: 0.000011857961430803153",
            "extra": "mean: 90.88951612902801 usec\nrounds: 744"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1897.2619421609463,
            "unit": "iter/sec",
            "range": "stddev: 0.00002362581347547466",
            "extra": "mean: 527.0753488371871 usec\nrounds: 215"
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
        "date": 1772859546175,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2427.2211477825495,
            "unit": "iter/sec",
            "range": "stddev: 0.00020172787478776362",
            "extra": "mean: 411.99377358489807 usec\nrounds: 1060"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1280788.17734116,
            "unit": "iter/sec",
            "range": "stddev: 7.068961125072924e-7",
            "extra": "mean: 780.7692307684638 nsec\nrounds: 1664"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 469521.28739558544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034970018365275703",
            "extra": "mean: 2.1298288849627185 usec\nrounds: 21506"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 428976.64208432916,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036300985164322006",
            "extra": "mean: 2.3311292548264615 usec\nrounds: 17392"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 952652.3923124658,
            "unit": "iter/sec",
            "range": "stddev: 7.378964147087502e-7",
            "extra": "mean: 1.049700822744593 usec\nrounds: 2674"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1326630.183946336,
            "unit": "iter/sec",
            "range": "stddev: 4.652108665430856e-7",
            "extra": "mean: 753.7895730860678 nsec\nrounds: 20121"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 18736.136971672517,
            "unit": "iter/sec",
            "range": "stddev: 0.000009423653359189257",
            "extra": "mean: 53.37279512377162 usec\nrounds: 8039"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5203.136985897933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000334626622276122",
            "extra": "mean: 192.19174946004705 usec\nrounds: 2315"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1322681.7892909013,
            "unit": "iter/sec",
            "range": "stddev: 5.131346394044178e-7",
            "extra": "mean: 756.0397429650156 nsec\nrounds: 18519"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 11207.629172917063,
            "unit": "iter/sec",
            "range": "stddev: 0.00001763246532795581",
            "extra": "mean: 89.2249363867671 usec\nrounds: 1572"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1336.718494113767,
            "unit": "iter/sec",
            "range": "stddev: 0.00007863878384685181",
            "extra": "mean: 748.1006692160652 usec\nrounds: 1046"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1734407.729099035,
            "unit": "iter/sec",
            "range": "stddev: 1.0565579628352856e-7",
            "extra": "mean: 576.5656963022699 nsec\nrounds: 17794"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 206115.09683784045,
            "unit": "iter/sec",
            "range": "stddev: 0.00000579759820178699",
            "extra": "mean: 4.851658201372521 usec\nrounds: 10041"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53735.10517518859,
            "unit": "iter/sec",
            "range": "stddev: 0.000004616169533240467",
            "extra": "mean: 18.609808182933186 usec\nrounds: 10583"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 11170.515772234156,
            "unit": "iter/sec",
            "range": "stddev: 0.000028024788271532278",
            "extra": "mean: 89.52138114209882 usec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 1873.1548764904373,
            "unit": "iter/sec",
            "range": "stddev: 0.000029351117463845146",
            "extra": "mean: 533.858685446027 usec\nrounds: 213"
          }
        ]
      }
    ]
  }
}