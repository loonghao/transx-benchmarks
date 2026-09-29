window.BENCHMARK_DATA = {
  "lastUpdate": 1790647529905,
  "repoUrl": "https://github.com/loonghao/transx",
  "entries": {
    "TransX Performance Benchmarks (Python 3.11)": [
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
        "date": 1734017747466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3185.8657064340023,
            "unit": "iter/sec",
            "range": "stddev: 0.00026697867951148665",
            "extra": "mean: 313.8864259031553 usec\nrounds: 803"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 94247.2903952182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024883543773778616",
            "extra": "mean: 10.610384614842324 usec\nrounds: 2080"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 87995.60740534202,
            "unit": "iter/sec",
            "range": "stddev: 0.00000189244134965235",
            "extra": "mean: 11.364203617501165 usec\nrounds: 33671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 88230.6727725874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019875197274630785",
            "extra": "mean: 11.333926950522955 usec\nrounds: 37454"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1235986.5469665886,
            "unit": "iter/sec",
            "range": "stddev: 7.431054907530836e-7",
            "extra": "mean: 809.070294862224 nsec\nrounds: 3528"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 95156.36746953768,
            "unit": "iter/sec",
            "range": "stddev: 0.000003635448553028114",
            "extra": "mean: 10.509018225397572 usec\nrounds: 38023"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 1009.1264593041715,
            "unit": "iter/sec",
            "range": "stddev: 0.00004631138517121122",
            "extra": "mean: 990.9560796667006 usec\nrounds: 954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 2851.581568514515,
            "unit": "iter/sec",
            "range": "stddev: 0.000032639864619137974",
            "extra": "mean: 350.6825864781185 usec\nrounds: 2544"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 76429.77728018849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022140123034513764",
            "extra": "mean: 13.083905718239114 usec\nrounds: 37038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 23060.954512548455,
            "unit": "iter/sec",
            "range": "stddev: 0.000005648306226406319",
            "extra": "mean: 43.36333951206821 usec\nrounds: 14026"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1762.7871538059596,
            "unit": "iter/sec",
            "range": "stddev: 0.00006690993916012081",
            "extra": "mean: 567.2834623516186 usec\nrounds: 1421"
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
        "date": 1734018612620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3237.269223449332,
            "unit": "iter/sec",
            "range": "stddev: 0.00024408022357937068",
            "extra": "mean: 308.90232815869837 usec\nrounds: 902"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 93992.48638594145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024333732622386486",
            "extra": "mean: 10.639148281426579 usec\nrounds: 1949"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 87510.9232880335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026137394155533014",
            "extra": "mean: 11.42714489148514 usec\nrounds: 22472"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 86337.96750767632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033683374761257374",
            "extra": "mean: 11.582389867019858 usec\nrounds: 35843"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1322519.8042941499,
            "unit": "iter/sec",
            "range": "stddev: 8.138100896772917e-8",
            "extra": "mean: 756.1323442968902 nsec\nrounds: 3506"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 92997.54523612537,
            "unit": "iter/sec",
            "range": "stddev: 0.000002430950338447476",
            "extra": "mean: 10.752972000077534 usec\nrounds: 25000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 979.6394543901188,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745316729543439",
            "extra": "mean: 1.020783713353559 msec\nrounds: 921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 857.7797899593123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546404704479106",
            "extra": "mean: 1.1658003740650427 msec\nrounds: 802"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 58743.88100319399,
            "unit": "iter/sec",
            "range": "stddev: 0.000003470728584555352",
            "extra": "mean: 17.023049599763908 usec\nrounds: 31250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 1114.6258343983832,
            "unit": "iter/sec",
            "range": "stddev: 0.00009385774610891604",
            "extra": "mean: 897.1620512813143 usec\nrounds: 780"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1754.3593423951984,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543442029812486",
            "extra": "mean: 570.0086497870591 usec\nrounds: 1422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 94742.76288923799,
            "unit": "iter/sec",
            "range": "stddev: 0.000002605600251678158",
            "extra": "mean: 10.554895904493321 usec\nrounds: 33671"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 75501.64561361274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024021444372107265",
            "extra": "mean: 13.244744427394343 usec\nrounds: 24631"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 41051.81971937909,
            "unit": "iter/sec",
            "range": "stddev: 0.000005461345726269948",
            "extra": "mean: 24.35945609319569 usec\nrounds: 19268"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 938.2268362222809,
            "unit": "iter/sec",
            "range": "stddev: 0.00004806933801486037",
            "extra": "mean: 1.0658403292176606 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 98.01136972726738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289174045354638",
            "extra": "mean: 10.202897916666842 msec\nrounds: 96"
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
        "date": 1734020578317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3334.421466212755,
            "unit": "iter/sec",
            "range": "stddev: 0.00017990202139843493",
            "extra": "mean: 299.90209999931494 usec\nrounds: 1000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1619847.3285384285,
            "unit": "iter/sec",
            "range": "stddev: 7.877482817733434e-8",
            "extra": "mean: 617.3421299538702 nsec\nrounds: 2122"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 572324.2385986925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032757312177915886",
            "extra": "mean: 1.747261311959197 usec\nrounds: 23095"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 496237.3086067944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032090640263395802",
            "extra": "mean: 2.0151648871535657 usec\nrounds: 25381"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1262085.455852962,
            "unit": "iter/sec",
            "range": "stddev: 1.2310220240731088e-7",
            "extra": "mean: 792.3393739801593 nsec\nrounds: 3642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1630589.3689872879,
            "unit": "iter/sec",
            "range": "stddev: 9.632790825738284e-8",
            "extra": "mean: 613.2751868859978 nsec\nrounds: 28090"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24305.717019695923,
            "unit": "iter/sec",
            "range": "stddev: 0.000003152625167474804",
            "extra": "mean: 41.142583828720575 usec\nrounds: 9931"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5573.758505196902,
            "unit": "iter/sec",
            "range": "stddev: 0.000030749117073722434",
            "extra": "mean: 179.41215053856615 usec\nrounds: 1860"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1629975.5061420917,
            "unit": "iter/sec",
            "range": "stddev: 1.387822274222399e-7",
            "extra": "mean: 613.5061516150329 nsec\nrounds: 22027"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 12930.116423526226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000210889089852852",
            "extra": "mean: 77.33882412539684 usec\nrounds: 1973"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1845.191680613286,
            "unit": "iter/sec",
            "range": "stddev: 0.000049166031973924115",
            "extra": "mean: 541.9491159138709 usec\nrounds: 1527"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2051505.4570732145,
            "unit": "iter/sec",
            "range": "stddev: 1.2030881852960944e-7",
            "extra": "mean: 487.44691199848603 nsec\nrounds: 156250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 223938.77893332968,
            "unit": "iter/sec",
            "range": "stddev: 0.00000860446054304739",
            "extra": "mean: 4.4655061743357845 usec\nrounds: 18383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54837.69242563433,
            "unit": "iter/sec",
            "range": "stddev: 0.000004197229441761541",
            "extra": "mean: 18.235632386539695 usec\nrounds: 11338"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14247.667987479048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001529346527589366",
            "extra": "mean: 70.18692468681942 usec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2366.1926593286057,
            "unit": "iter/sec",
            "range": "stddev: 0.00004452624534500237",
            "extra": "mean: 422.6198555969422 usec\nrounds: 277"
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
        "date": 1734020643210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3257.2024411890375,
            "unit": "iter/sec",
            "range": "stddev: 0.00023457351184317938",
            "extra": "mean: 307.01192758376766 usec\nrounds: 939"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1599553.4077666167,
            "unit": "iter/sec",
            "range": "stddev: 1.3224895116141511e-7",
            "extra": "mean: 625.1744987972952 nsec\nrounds: 2149"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 567711.1372280775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033796690187929207",
            "extra": "mean: 1.7614591901131769 usec\nrounds: 23095"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 497982.69359813555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032533306666557305",
            "extra": "mean: 2.0081019136921747 usec\nrounds: 26179"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1278433.0239041238,
            "unit": "iter/sec",
            "range": "stddev: 1.2446761328266273e-7",
            "extra": "mean: 782.2075785762829 nsec\nrounds: 3642"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1643818.0856931314,
            "unit": "iter/sec",
            "range": "stddev: 4.023251165461912e-7",
            "extra": "mean: 608.3398209956673 nsec\nrounds: 21835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24897.778058843705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031366436497322744",
            "extra": "mean: 40.1642266083579 usec\nrounds: 9426"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5718.258168802682,
            "unit": "iter/sec",
            "range": "stddev: 0.000030330381537037962",
            "extra": "mean: 174.8784280947191 usec\nrounds: 1794"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1600556.4789636354,
            "unit": "iter/sec",
            "range": "stddev: 3.0593022877514443e-7",
            "extra": "mean: 624.7827009812879 nsec\nrounds: 23585"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13223.917702456467,
            "unit": "iter/sec",
            "range": "stddev: 0.000022090420515497068",
            "extra": "mean: 75.6205553074669 usec\nrounds: 2233"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1810.6901057888022,
            "unit": "iter/sec",
            "range": "stddev: 0.00007012541576300868",
            "extra": "mean: 552.2756195568671 usec\nrounds: 1493"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2033482.4670931143,
            "unit": "iter/sec",
            "range": "stddev: 1.4517181624500245e-7",
            "extra": "mean: 491.76721028298994 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 230153.14960091023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000090603257537732",
            "extra": "mean: 4.344932935890811 usec\nrounds: 12078"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 56444.963011164364,
            "unit": "iter/sec",
            "range": "stddev: 0.000003939002957822257",
            "extra": "mean: 17.716372669111465 usec\nrounds: 13889"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14573.693208255954,
            "unit": "iter/sec",
            "range": "stddev: 0.000008625652005733042",
            "extra": "mean: 68.61678681650187 usec\nrounds: 971"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2368.086801113902,
            "unit": "iter/sec",
            "range": "stddev: 0.000023399230217894923",
            "extra": "mean: 422.2818181874159 usec\nrounds: 275"
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
        "date": 1772501273108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2849.511065596414,
            "unit": "iter/sec",
            "range": "stddev: 0.00025674490179399125",
            "extra": "mean: 350.9373983745861 usec\nrounds: 738"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1640089.0848545088,
            "unit": "iter/sec",
            "range": "stddev: 8.740199090155157e-8",
            "extra": "mean: 609.7229773885784 nsec\nrounds: 1841"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 552787.8521809101,
            "unit": "iter/sec",
            "range": "stddev: 0.000003387455864134669",
            "extra": "mean: 1.809012256790208 usec\nrounds: 19418"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 451657.7027351317,
            "unit": "iter/sec",
            "range": "stddev: 0.000005314484849889577",
            "extra": "mean: 2.214066081336015 usec\nrounds: 10472"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1202333.0494254848,
            "unit": "iter/sec",
            "range": "stddev: 3.7478646865882385e-7",
            "extra": "mean: 831.716303962395 nsec\nrounds: 3257"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1582327.6015061014,
            "unit": "iter/sec",
            "range": "stddev: 3.200568603813999e-7",
            "extra": "mean: 631.9803807050913 nsec\nrounds: 22223"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24971.743212254245,
            "unit": "iter/sec",
            "range": "stddev: 0.000003903409924276677",
            "extra": "mean: 40.04526201876349 usec\nrounds: 6469"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5609.678116872474,
            "unit": "iter/sec",
            "range": "stddev: 0.000033657471715828236",
            "extra": "mean: 178.2633475871381 usec\nrounds: 3274"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1559887.7808348397,
            "unit": "iter/sec",
            "range": "stddev: 5.155486184605974e-7",
            "extra": "mean: 641.071756754712 nsec\nrounds: 21740"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13706.340689039733,
            "unit": "iter/sec",
            "range": "stddev: 0.000019032032874290343",
            "extra": "mean: 72.95893358317362 usec\nrounds: 2138"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1557.7722240617156,
            "unit": "iter/sec",
            "range": "stddev: 0.00006635148063191463",
            "extra": "mean: 641.9423742147698 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2016461.6392219854,
            "unit": "iter/sec",
            "range": "stddev: 1.9751618010212012e-7",
            "extra": "mean: 495.91818686151595 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 221840.53681088917,
            "unit": "iter/sec",
            "range": "stddev: 0.000007962069858413985",
            "extra": "mean: 4.5077424278524125 usec\nrounds: 17036"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55950.98001722615,
            "unit": "iter/sec",
            "range": "stddev: 0.000004821636759946174",
            "extra": "mean: 17.872787924217242 usec\nrounds: 11991"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14715.694143786774,
            "unit": "iter/sec",
            "range": "stddev: 0.000006266172958407114",
            "extra": "mean: 67.95466052970514 usec\nrounds: 869"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2339.3683365364864,
            "unit": "iter/sec",
            "range": "stddev: 0.00003447349551505917",
            "extra": "mean: 427.46581817916444 usec\nrounds: 275"
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
        "date": 1772501292727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2669.3466520289658,
            "unit": "iter/sec",
            "range": "stddev: 0.0003384478932422727",
            "extra": "mean: 374.6235054333995 usec\nrounds: 736"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1608738.8266670255,
            "unit": "iter/sec",
            "range": "stddev: 1.1766540867199913e-7",
            "extra": "mean: 621.6049388649328 nsec\nrounds: 1782"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 547687.63221964,
            "unit": "iter/sec",
            "range": "stddev: 0.000003483250408628795",
            "extra": "mean: 1.8258582833927655 usec\nrounds: 17302"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 482165.8504103398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034473965068939853",
            "extra": "mean: 2.073975166737681 usec\nrounds: 17637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1181197.9869506117,
            "unit": "iter/sec",
            "range": "stddev: 7.562342663254242e-7",
            "extra": "mean: 846.5981241481848 nsec\nrounds: 3307"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1637147.871141072,
            "unit": "iter/sec",
            "range": "stddev: 3.2910245813538067e-7",
            "extra": "mean: 610.8183736042196 nsec\nrounds: 18940"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 23173.857387248125,
            "unit": "iter/sec",
            "range": "stddev: 0.000011540550136575913",
            "extra": "mean: 43.15207361853663 usec\nrounds: 8150"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5408.466246081785,
            "unit": "iter/sec",
            "range": "stddev: 0.000043113733477106816",
            "extra": "mean: 184.89530201366412 usec\nrounds: 3576"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1608701.6449467072,
            "unit": "iter/sec",
            "range": "stddev: 4.216361725286765e-7",
            "extra": "mean: 621.6193059422948 nsec\nrounds: 21009"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13167.309396563944,
            "unit": "iter/sec",
            "range": "stddev: 0.000025187422005283045",
            "extra": "mean: 75.94565980662334 usec\nrounds: 1993"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1499.8650002104725,
            "unit": "iter/sec",
            "range": "stddev: 0.0001118535766520645",
            "extra": "mean: 666.7266719735925 usec\nrounds: 1256"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1991078.0213217302,
            "unit": "iter/sec",
            "range": "stddev: 2.0683983021834618e-7",
            "extra": "mean: 502.2404894701545 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 225707.73757698893,
            "unit": "iter/sec",
            "range": "stddev: 0.000008589944522794447",
            "extra": "mean: 4.430508279136421 usec\nrounds: 17392"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 51730.58338285392,
            "unit": "iter/sec",
            "range": "stddev: 0.000007070352502270276",
            "extra": "mean: 19.330924466849325 usec\nrounds: 10406"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14525.862149369445,
            "unit": "iter/sec",
            "range": "stddev: 0.000006306980721736783",
            "extra": "mean: 68.84272958926636 usec\nrounds: 784"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2291.5448027061643,
            "unit": "iter/sec",
            "range": "stddev: 0.000040713061450807545",
            "extra": "mean: 436.3868421071522 usec\nrounds: 266"
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
        "date": 1772859182968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2668.429408541375,
            "unit": "iter/sec",
            "range": "stddev: 0.00022841109455751972",
            "extra": "mean: 374.75227817498205 usec\nrounds: 834"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1518624.6413933202,
            "unit": "iter/sec",
            "range": "stddev: 4.153623603367821e-7",
            "extra": "mean: 658.490566228737 nsec\nrounds: 2067"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 535046.8329452648,
            "unit": "iter/sec",
            "range": "stddev: 0.00000358432523640237",
            "extra": "mean: 1.8689952699940566 usec\nrounds: 22832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 487453.80798304034,
            "unit": "iter/sec",
            "range": "stddev: 0.000003254408616948892",
            "extra": "mean: 2.0514764345318075 usec\nrounds: 25907"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1179374.6554535609,
            "unit": "iter/sec",
            "range": "stddev: 8.523191931975348e-7",
            "extra": "mean: 847.9069779699671 nsec\nrounds: 3225"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1541491.5275730274,
            "unit": "iter/sec",
            "range": "stddev: 4.904962153969737e-7",
            "extra": "mean: 648.7223459310421 nsec\nrounds: 29155"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24695.109796363147,
            "unit": "iter/sec",
            "range": "stddev: 0.000006800727430848154",
            "extra": "mean: 40.49384709142982 usec\nrounds: 6566"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5366.188628820847,
            "unit": "iter/sec",
            "range": "stddev: 0.00004472947449451348",
            "extra": "mean: 186.35200310126584 usec\nrounds: 3869"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1524603.0926674823,
            "unit": "iter/sec",
            "range": "stddev: 6.176409519430499e-7",
            "extra": "mean: 655.9084163015673 nsec\nrounds: 20877"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13607.397327972802,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417664043851492",
            "extra": "mean: 73.48943930256922 usec\nrounds: 1837"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1482.6098871880126,
            "unit": "iter/sec",
            "range": "stddev: 0.00007608918015148853",
            "extra": "mean: 674.4862614511811 usec\nrounds: 1201"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1970582.376901408,
            "unit": "iter/sec",
            "range": "stddev: 2.0889154816329148e-7",
            "extra": "mean: 507.4641952161529 nsec\nrounds: 142858"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 217815.7022246424,
            "unit": "iter/sec",
            "range": "stddev: 0.000008218598913271477",
            "extra": "mean: 4.59103723830093 usec\nrounds: 18019"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53705.29077079687,
            "unit": "iter/sec",
            "range": "stddev: 0.000006020759091434372",
            "extra": "mean: 18.620139387528766 usec\nrounds: 9757"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 12381.208845274414,
            "unit": "iter/sec",
            "range": "stddev: 0.00005029673606707556",
            "extra": "mean: 80.76755771563244 usec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2322.4878351105917,
            "unit": "iter/sec",
            "range": "stddev: 0.00004191450774486655",
            "extra": "mean: 430.5727611926899 usec\nrounds: 268"
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
        "date": 1772859185891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2680.2054265743795,
            "unit": "iter/sec",
            "range": "stddev: 0.00024580695586173595",
            "extra": "mean: 373.1057291672298 usec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1561724.8684223595,
            "unit": "iter/sec",
            "range": "stddev: 5.919276843759926e-7",
            "extra": "mean: 640.317651476083 nsec\nrounds: 1637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 555796.1482420601,
            "unit": "iter/sec",
            "range": "stddev: 0.000003546923735339369",
            "extra": "mean: 1.7992208171339834 usec\nrounds: 20791"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 485222.3050756514,
            "unit": "iter/sec",
            "range": "stddev: 0.000003419757319994068",
            "extra": "mean: 2.060911028902699 usec\nrounds: 17826"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1246565.7934398695,
            "unit": "iter/sec",
            "range": "stddev: 3.962539429427569e-7",
            "extra": "mean: 802.2039472465574 nsec\nrounds: 3040"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1579109.3848561784,
            "unit": "iter/sec",
            "range": "stddev: 4.5654348197559197e-7",
            "extra": "mean: 633.2683534086384 nsec\nrounds: 17954"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 23527.22693927795,
            "unit": "iter/sec",
            "range": "stddev: 0.000013594318498072873",
            "extra": "mean: 42.50394670740104 usec\nrounds: 7956"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5504.271205048352,
            "unit": "iter/sec",
            "range": "stddev: 0.00003133429500591466",
            "extra": "mean: 181.67709452303694 usec\nrounds: 3724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1574820.1224761647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012776258322025361",
            "extra": "mean: 634.9931561883095 nsec\nrounds: 21187"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13398.897983690473,
            "unit": "iter/sec",
            "range": "stddev: 0.000016945112646727098",
            "extra": "mean: 74.6330034915729 usec\nrounds: 1718"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1493.813647802153,
            "unit": "iter/sec",
            "range": "stddev: 0.00006660393971154054",
            "extra": "mean: 669.4275430347684 usec\nrounds: 1278"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2024165.7083526265,
            "unit": "iter/sec",
            "range": "stddev: 1.919783422674925e-7",
            "extra": "mean: 494.0306991036468 nsec\nrounds: 89286"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 205851.89023869738,
            "unit": "iter/sec",
            "range": "stddev: 0.000006025941049338425",
            "extra": "mean: 4.857861634597774 usec\nrounds: 18762"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 49815.152121555126,
            "unit": "iter/sec",
            "range": "stddev: 0.000005163452549057402",
            "extra": "mean: 20.07421351559615 usec\nrounds: 11793"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 13973.682039831045,
            "unit": "iter/sec",
            "range": "stddev: 0.000056508347753608545",
            "extra": "mean: 71.5630996289716 usec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2316.4554773898467,
            "unit": "iter/sec",
            "range": "stddev: 0.000046150549537328644",
            "extra": "mean: 431.6940298489085 usec\nrounds: 268"
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
        "date": 1772859456659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2650.0062962499637,
            "unit": "iter/sec",
            "range": "stddev: 0.00032972705051007224",
            "extra": "mean: 377.3575939857594 usec\nrounds: 665"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1631616.5391478473,
            "unit": "iter/sec",
            "range": "stddev: 1.1531916729297628e-7",
            "extra": "mean: 612.8891047661696 nsec\nrounds: 2056"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 544681.0679921478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036241049903550777",
            "extra": "mean: 1.8359367688072763 usec\nrounds: 19231"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 486663.35988754296,
            "unit": "iter/sec",
            "range": "stddev: 0.000003353158624075238",
            "extra": "mean: 2.0548084824612185 usec\nrounds: 18249"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1239114.5118896947,
            "unit": "iter/sec",
            "range": "stddev: 9.152901794189693e-7",
            "extra": "mean: 807.0279142118702 nsec\nrounds: 3045"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1630473.3871782082,
            "unit": "iter/sec",
            "range": "stddev: 2.0563897921738855e-7",
            "extra": "mean: 613.3188114960025 nsec\nrounds: 12854"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24876.41306418548,
            "unit": "iter/sec",
            "range": "stddev: 0.000006353009783255626",
            "extra": "mean: 40.1987214724175 usec\nrounds: 8369"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5696.241649796684,
            "unit": "iter/sec",
            "range": "stddev: 0.000032514302409719696",
            "extra": "mean: 175.5543499520764 usec\nrounds: 4092"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1616649.9201623132,
            "unit": "iter/sec",
            "range": "stddev: 4.3713600105116313e-7",
            "extra": "mean: 618.5631085173957 nsec\nrounds: 17858"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13769.262319258036,
            "unit": "iter/sec",
            "range": "stddev: 0.000017238116583673335",
            "extra": "mean: 72.62553191403543 usec\nrounds: 1880"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1486.3374402660413,
            "unit": "iter/sec",
            "range": "stddev: 0.00007782878770454505",
            "extra": "mean: 672.7947321444105 usec\nrounds: 1120"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1997762.196656314,
            "unit": "iter/sec",
            "range": "stddev: 1.1253794761149751e-7",
            "extra": "mean: 500.5600775079438 nsec\nrounds: 87720"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 228541.49143933028,
            "unit": "iter/sec",
            "range": "stddev: 0.000004685101032345056",
            "extra": "mean: 4.375573090479568 usec\nrounds: 17362"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55951.99443274555,
            "unit": "iter/sec",
            "range": "stddev: 0.000006118155239103274",
            "extra": "mean: 17.87246388870021 usec\nrounds: 11977"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14514.026799318708,
            "unit": "iter/sec",
            "range": "stddev: 0.000006660681616739453",
            "extra": "mean: 68.89886685664244 usec\nrounds: 706"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2321.226073263994,
            "unit": "iter/sec",
            "range": "stddev: 0.000014199619646568305",
            "extra": "mean: 430.8068100380456 usec\nrounds: 279"
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
        "date": 1772859492717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2766.30274417466,
            "unit": "iter/sec",
            "range": "stddev: 0.00021965296662745698",
            "extra": "mean: 361.4933333330279 usec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1563813.8106880344,
            "unit": "iter/sec",
            "range": "stddev: 8.151236760704564e-7",
            "extra": "mean: 639.462315248404 nsec\nrounds: 2083"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 541255.561639633,
            "unit": "iter/sec",
            "range": "stddev: 0.000004710134356909394",
            "extra": "mean: 1.8475560730880733 usec\nrounds: 18904"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 492207.36100827064,
            "unit": "iter/sec",
            "range": "stddev: 0.000003334167307074786",
            "extra": "mean: 2.0316640489722317 usec\nrounds: 21646"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1243905.8352152635,
            "unit": "iter/sec",
            "range": "stddev: 1.0641985382035982e-7",
            "extra": "mean: 803.9193737096228 nsec\nrounds: 2679"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1645526.3506019325,
            "unit": "iter/sec",
            "range": "stddev: 5.318828672473735e-7",
            "extra": "mean: 607.708287159425 nsec\nrounds: 22625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24496.899415714233,
            "unit": "iter/sec",
            "range": "stddev: 0.000012640503482261248",
            "extra": "mean: 40.821492672600094 usec\nrounds: 8803"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5501.583505906682,
            "unit": "iter/sec",
            "range": "stddev: 0.00005730011642734115",
            "extra": "mean: 181.76584958246423 usec\nrounds: 1795"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1627942.109045199,
            "unit": "iter/sec",
            "range": "stddev: 2.7193863126804463e-7",
            "extra": "mean: 614.2724575055731 nsec\nrounds: 21552"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13863.13197337027,
            "unit": "iter/sec",
            "range": "stddev: 0.00001712559635515016",
            "extra": "mean: 72.13377192981376 usec\nrounds: 2052"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1515.2951714160567,
            "unit": "iter/sec",
            "range": "stddev: 0.00006237449960978904",
            "extra": "mean: 659.9374292636934 usec\nrounds: 1237"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2066405.767835807,
            "unit": "iter/sec",
            "range": "stddev: 1.441895717152435e-7",
            "extra": "mean: 483.93205998769196 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 222066.40690902306,
            "unit": "iter/sec",
            "range": "stddev: 0.000007618189724453436",
            "extra": "mean: 4.503157474014894 usec\nrounds: 17514"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 56162.10471606641,
            "unit": "iter/sec",
            "range": "stddev: 0.000004888714452826015",
            "extra": "mean: 17.805600503321735 usec\nrounds: 11124"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14449.762759722378,
            "unit": "iter/sec",
            "range": "stddev: 0.000014022289146855075",
            "extra": "mean: 69.20528846241162 usec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2354.541000824167,
            "unit": "iter/sec",
            "range": "stddev: 0.000016324543443626656",
            "extra": "mean: 424.7112280694908 usec\nrounds: 285"
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
        "date": 1772859512495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2515.3792869256395,
            "unit": "iter/sec",
            "range": "stddev: 0.0004956316822457032",
            "extra": "mean: 397.5543589778961 usec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1575661.9096022788,
            "unit": "iter/sec",
            "range": "stddev: 1.4933846126968072e-7",
            "extra": "mean: 634.6539152250087 nsec\nrounds: 2196"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 554439.2069783664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033277128569524106",
            "extra": "mean: 1.8036242520616312 usec\nrounds: 23867"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 486578.987155959,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034108421781307623",
            "extra": "mean: 2.0551647859784756 usec\nrounds: 18084"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1235255.427251055,
            "unit": "iter/sec",
            "range": "stddev: 6.599740459992823e-7",
            "extra": "mean: 809.5491652486857 nsec\nrounds: 2817"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1576610.8869730465,
            "unit": "iter/sec",
            "range": "stddev: 3.7574456102165575e-7",
            "extra": "mean: 634.2719108834214 nsec\nrounds: 20492"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24388.00370569968,
            "unit": "iter/sec",
            "range": "stddev: 0.000007822547123169069",
            "extra": "mean: 41.00376611662937 usec\nrounds: 8842"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5549.315296115669,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666701137887619",
            "extra": "mean: 180.2024117641983 usec\nrounds: 1700"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1592221.2317515279,
            "unit": "iter/sec",
            "range": "stddev: 5.764692515028529e-7",
            "extra": "mean: 628.0534262816901 nsec\nrounds: 21787"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13632.209087629659,
            "unit": "iter/sec",
            "range": "stddev: 0.000021916765362512054",
            "extra": "mean: 73.3556823822072 usec\nrounds: 2015"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1355.8588891414606,
            "unit": "iter/sec",
            "range": "stddev: 0.0004783871640979507",
            "extra": "mean: 737.5398782340889 usec\nrounds: 1314"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 1722804.955347192,
            "unit": "iter/sec",
            "range": "stddev: 3.7924427689468633e-7",
            "extra": "mean: 580.4487599688899 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 223175.5819359903,
            "unit": "iter/sec",
            "range": "stddev: 0.000010257165086516313",
            "extra": "mean: 4.480776935026938 usec\nrounds: 16475"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 53407.52319047486,
            "unit": "iter/sec",
            "range": "stddev: 0.000006676772090387778",
            "extra": "mean: 18.723953860087416 usec\nrounds: 11877"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 13446.877508158706,
            "unit": "iter/sec",
            "range": "stddev: 0.000025115888356015224",
            "extra": "mean: 74.36670702125932 usec\nrounds: 826"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2354.557396336611,
            "unit": "iter/sec",
            "range": "stddev: 0.000018276038733317856",
            "extra": "mean: 424.70827067366105 usec\nrounds: 266"
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
        "date": 1790334641963,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4250.873135240845,
            "unit": "iter/sec",
            "range": "stddev: 0.000224872034740648",
            "extra": "mean: 235.24578790878033 usec\nrounds: 1009"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2083864.0154180832,
            "unit": "iter/sec",
            "range": "stddev: 3.412105392908497e-7",
            "extra": "mean: 479.8777619850455 nsec\nrounds: 2127"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 514613.8667369468,
            "unit": "iter/sec",
            "range": "stddev: 0.000021978764398567733",
            "extra": "mean: 1.9432045357440129 usec\nrounds: 23810"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 492120.6268189261,
            "unit": "iter/sec",
            "range": "stddev: 0.000004251435993002802",
            "extra": "mean: 2.032022121210429 usec\nrounds: 22422"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1433724.797518125,
            "unit": "iter/sec",
            "range": "stddev: 9.149145379445454e-7",
            "extra": "mean: 697.4839255979027 nsec\nrounds: 3577"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1889858.4201618014,
            "unit": "iter/sec",
            "range": "stddev: 2.950099661874555e-7",
            "extra": "mean: 529.1401669731346 nsec\nrounds: 24214"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 32229.369784637936,
            "unit": "iter/sec",
            "range": "stddev: 0.000006680376795138067",
            "extra": "mean: 31.027600188342745 usec\nrounds: 10605"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6479.885024759326,
            "unit": "iter/sec",
            "range": "stddev: 0.000033323103571053703",
            "extra": "mean: 154.32372583449373 usec\nrounds: 1707"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2206618.953691897,
            "unit": "iter/sec",
            "range": "stddev: 3.046275835044685e-7",
            "extra": "mean: 453.1820042272812 nsec\nrounds: 24450"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 16193.023166116738,
            "unit": "iter/sec",
            "range": "stddev: 0.000019562224154497162",
            "extra": "mean: 61.75499100701964 usec\nrounds: 2224"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2411.406833409164,
            "unit": "iter/sec",
            "range": "stddev: 0.00007253888951402234",
            "extra": "mean: 414.6956814359834 usec\nrounds: 1783"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2637243.5804548752,
            "unit": "iter/sec",
            "range": "stddev: 1.4421152385404237e-7",
            "extra": "mean: 379.1837839367195 nsec\nrounds: 178572"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 254160.50458193274,
            "unit": "iter/sec",
            "range": "stddev: 0.000014202237085201915",
            "extra": "mean: 3.934521619104017 usec\nrounds: 17392"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 70025.32842501119,
            "unit": "iter/sec",
            "range": "stddev: 0.000004770681912200309",
            "extra": "mean: 14.280547089056228 usec\nrounds: 13124"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15441.115936377812,
            "unit": "iter/sec",
            "range": "stddev: 0.000020000911072122694",
            "extra": "mean: 64.76215864969282 usec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2899.494007900569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004103344237987205",
            "extra": "mean: 344.8877622354764 usec\nrounds: 286"
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
        "date": 1790334705497,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2607.9649180439596,
            "unit": "iter/sec",
            "range": "stddev: 0.00022575303458306588",
            "extra": "mean: 383.4407407404949 usec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1591205.6975934657,
            "unit": "iter/sec",
            "range": "stddev: 6.836874154504924e-7",
            "extra": "mean: 628.4542605097486 nsec\nrounds: 1585"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 537336.7558890292,
            "unit": "iter/sec",
            "range": "stddev: 0.000003977612962350442",
            "extra": "mean: 1.861030329751944 usec\nrounds: 17606"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 472555.5190641474,
            "unit": "iter/sec",
            "range": "stddev: 0.000003503346620885654",
            "extra": "mean: 2.116153466962798 usec\nrounds: 18349"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1258801.0477483394,
            "unit": "iter/sec",
            "range": "stddev: 1.6464201201836062e-7",
            "extra": "mean: 794.4067108847219 nsec\nrounds: 2503"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1308269.8806108776,
            "unit": "iter/sec",
            "range": "stddev: 5.47503176094722e-7",
            "extra": "mean: 764.3682812089693 nsec\nrounds: 17302"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24775.403883946485,
            "unit": "iter/sec",
            "range": "stddev: 0.000006050803458169981",
            "extra": "mean: 40.362611430442186 usec\nrounds: 5721"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5493.1285709365275,
            "unit": "iter/sec",
            "range": "stddev: 0.00003973494213358581",
            "extra": "mean: 182.04562064883714 usec\nrounds: 3448"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1600984.6936866986,
            "unit": "iter/sec",
            "range": "stddev: 4.954116142705994e-7",
            "extra": "mean: 624.6155906070724 nsec\nrounds: 22372"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13767.143197190668,
            "unit": "iter/sec",
            "range": "stddev: 0.000018730527037274017",
            "extra": "mean: 72.63671087579452 usec\nrounds: 1885"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1451.654827587028,
            "unit": "iter/sec",
            "range": "stddev: 0.00008429048085575836",
            "extra": "mean: 688.8689935073764 usec\nrounds: 1232"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2047937.195375174,
            "unit": "iter/sec",
            "range": "stddev: 1.583077565237282e-7",
            "extra": "mean: 488.29622424866875 nsec\nrounds: 140846"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 203187.05590016476,
            "unit": "iter/sec",
            "range": "stddev: 0.000009553938867344718",
            "extra": "mean: 4.921573353035572 usec\nrounds: 16182"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55434.158512877264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060411215588603865",
            "extra": "mean: 18.039418777642336 usec\nrounds: 12078"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14708.04811393466,
            "unit": "iter/sec",
            "range": "stddev: 0.000006102850353603633",
            "extra": "mean: 67.98998699579876 usec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2332.6536959866094,
            "unit": "iter/sec",
            "range": "stddev: 0.000016997195954763734",
            "extra": "mean: 428.6962962914408 usec\nrounds: 270"
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
        "date": 1790334709457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2413.1423444633947,
            "unit": "iter/sec",
            "range": "stddev: 0.0014120856322790605",
            "extra": "mean: 414.3974358969561 usec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2989221.3349561,
            "unit": "iter/sec",
            "range": "stddev: 7.331933514822948e-7",
            "extra": "mean: 334.5352812473105 nsec\nrounds: 3217"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 889713.8542446725,
            "unit": "iter/sec",
            "range": "stddev: 0.000002395549997081608",
            "extra": "mean: 1.1239568713347232 usec\nrounds: 31348"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 775844.7064885685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024429812061141927",
            "extra": "mean: 1.2889177326812558 usec\nrounds: 21187"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 2182205.767096958,
            "unit": "iter/sec",
            "range": "stddev: 3.538102919437464e-7",
            "extra": "mean: 458.25192797025943 nsec\nrounds: 5835"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 3091794.503327276,
            "unit": "iter/sec",
            "range": "stddev: 2.878799131899192e-7",
            "extra": "mean: 323.4367610537623 nsec\nrounds: 21142"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 47433.11069476661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025098543364330996",
            "extra": "mean: 21.082319614984307 usec\nrounds: 9355"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 8828.486893589006,
            "unit": "iter/sec",
            "range": "stddev: 0.000022938221254152277",
            "extra": "mean: 113.26969298965277 usec\nrounds: 6091"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 3068700.7941956744,
            "unit": "iter/sec",
            "range": "stddev: 2.3631191948857949e-7",
            "extra": "mean: 325.8708056163248 nsec\nrounds: 25063"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 23163.266855977534,
            "unit": "iter/sec",
            "range": "stddev: 0.00001136493509806095",
            "extra": "mean: 43.17180327877365 usec\nrounds: 3050"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 3464.049976604854,
            "unit": "iter/sec",
            "range": "stddev: 0.00003842498462991083",
            "extra": "mean: 288.6794378700359 usec\nrounds: 2028"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 4210294.014341144,
            "unit": "iter/sec",
            "range": "stddev: 4.91450375220348e-8",
            "extra": "mean: 237.5131039763806 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 391285.2431163895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035420628876092417",
            "extra": "mean: 2.5556803319120975 usec\nrounds: 22173"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 103257.07084452714,
            "unit": "iter/sec",
            "range": "stddev: 0.000002746141143971837",
            "extra": "mean: 9.684566798390856 usec\nrounds: 15674"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 26679.452711527785,
            "unit": "iter/sec",
            "range": "stddev: 0.000004049759287440608",
            "extra": "mean: 37.482028241453214 usec\nrounds: 1558"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 4586.620497458998,
            "unit": "iter/sec",
            "range": "stddev: 0.00001955496983351653",
            "extra": "mean: 218.02545044962912 usec\nrounds: 444"
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
        "date": 1790334747196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 2620.205583854107,
            "unit": "iter/sec",
            "range": "stddev: 0.0002560220299562211",
            "extra": "mean: 381.6494423804266 usec\nrounds: 807"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1635950.9768219523,
            "unit": "iter/sec",
            "range": "stddev: 1.1266622648345007e-7",
            "extra": "mean: 611.2652604924814 nsec\nrounds: 1802"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 554303.3540115862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034115687789614164",
            "extra": "mean: 1.8040662982874496 usec\nrounds: 22625"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 487616.976391423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035231840310054487",
            "extra": "mean: 2.0507899610067586 usec\nrounds: 25381"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1257732.7871165846,
            "unit": "iter/sec",
            "range": "stddev: 5.193890041958865e-7",
            "extra": "mean: 795.0814435652505 nsec\nrounds: 3131"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1365897.9192364817,
            "unit": "iter/sec",
            "range": "stddev: 5.40958633828805e-7",
            "extra": "mean: 732.1191327086773 nsec\nrounds: 27398"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 24922.371278440147,
            "unit": "iter/sec",
            "range": "stddev: 0.000006985042252197113",
            "extra": "mean: 40.12459283379188 usec\nrounds: 9824"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5578.566688429842,
            "unit": "iter/sec",
            "range": "stddev: 0.00003527162533678228",
            "extra": "mean: 179.25751467201025 usec\nrounds: 3919"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1643108.7318918214,
            "unit": "iter/sec",
            "range": "stddev: 4.39396973040674e-7",
            "extra": "mean: 608.6024500938736 nsec\nrounds: 21552"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 13779.394494066137,
            "unit": "iter/sec",
            "range": "stddev: 0.000017336148469149807",
            "extra": "mean: 72.57212937989641 usec\nrounds: 1855"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1478.3088056211182,
            "unit": "iter/sec",
            "range": "stddev: 0.00006787236846800734",
            "extra": "mean: 676.448652810294 usec\nrounds: 1299"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2033655.9980740282,
            "unit": "iter/sec",
            "range": "stddev: 1.563213686978318e-7",
            "extra": "mean: 491.72524800040264 nsec\nrounds: 156250"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 228505.7711654238,
            "unit": "iter/sec",
            "range": "stddev: 0.000005503489268006785",
            "extra": "mean: 4.376257084885891 usec\nrounds: 19231"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54025.288311465156,
            "unit": "iter/sec",
            "range": "stddev: 0.000006033348431889127",
            "extra": "mean: 18.50985031740741 usec\nrounds: 13228"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14500.99966029086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048949607920498655",
            "extra": "mean: 68.96076294232132 usec\nrounds: 734"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2344.3472352038207,
            "unit": "iter/sec",
            "range": "stddev: 0.000015712970028739887",
            "extra": "mean: 426.55797101364925 usec\nrounds: 276"
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
        "date": 1790345096008,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 268.2535984807527,
            "unit": "iter/sec",
            "range": "stddev: 0.0024745790081145227",
            "extra": "mean: 3.7278157894748625 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 54.39397556502768,
            "unit": "iter/sec",
            "range": "stddev: 0.0023981796181661978",
            "extra": "mean: 18.38438888888542 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 32.70531749024353,
            "unit": "iter/sec",
            "range": "stddev: 0.0022270647182444188",
            "extra": "mean: 30.576067647052028 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 39.783376201302595,
            "unit": "iter/sec",
            "range": "stddev: 0.0035906136488982514",
            "extra": "mean: 25.13612708333331 msec\nrounds: 48"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 252.51081290642222,
            "unit": "iter/sec",
            "range": "stddev: 0.0024109967577949495",
            "extra": "mean: 3.960226449275221 msec\nrounds: 276"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2820.809436700829,
            "unit": "iter/sec",
            "range": "stddev: 0.000019736358241506798",
            "extra": "mean: 354.5081730758754 usec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 4242.895330536974,
            "unit": "iter/sec",
            "range": "stddev: 0.00004504798198839634",
            "extra": "mean: 235.68811438802138 usec\nrounds: 2238"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1705871.9216616442,
            "unit": "iter/sec",
            "range": "stddev: 4.7558770857819325e-7",
            "extra": "mean: 586.2104811631618 nsec\nrounds: 95239"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 653416.619223087,
            "unit": "iter/sec",
            "range": "stddev: 9.006320167884783e-7",
            "extra": "mean: 1.5304171497642667 usec\nrounds: 1726"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 563100.4876898698,
            "unit": "iter/sec",
            "range": "stddev: 8.449645586343939e-7",
            "extra": "mean: 1.7758819639857153 usec\nrounds: 16639"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1342247.7483642837,
            "unit": "iter/sec",
            "range": "stddev: 4.980582389224728e-7",
            "extra": "mean: 745.0189439458101 nsec\nrounds: 4487"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1720791.7562617103,
            "unit": "iter/sec",
            "range": "stddev: 3.605490590348285e-7",
            "extra": "mean: 581.1278420884723 nsec\nrounds: 123457"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28551.67961298666,
            "unit": "iter/sec",
            "range": "stddev: 0.000005842481900512056",
            "extra": "mean: 35.024209207823716 usec\nrounds: 19158"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6800.172975599931,
            "unit": "iter/sec",
            "range": "stddev: 0.00001313182758766007",
            "extra": "mean: 147.055082802769 usec\nrounds: 3925"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1766687.2791043504,
            "unit": "iter/sec",
            "range": "stddev: 3.560992851624401e-7",
            "extra": "mean: 566.0311317274926 nsec\nrounds: 116280"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 15623.715154868083,
            "unit": "iter/sec",
            "range": "stddev: 0.000009183542952061967",
            "extra": "mean: 64.0052631584503 usec\nrounds: 2470"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 2336.507408424768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008351624821120675",
            "extra": "mean: 427.98922716627817 usec\nrounds: 1708"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2253309.3301001964,
            "unit": "iter/sec",
            "range": "stddev: 1.985799142955504e-7",
            "extra": "mean: 443.79170966106864 nsec\nrounds: 116280"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 226719.634182887,
            "unit": "iter/sec",
            "range": "stddev: 0.000002957202111993709",
            "extra": "mean: 4.410734004595889 usec\nrounds: 12316"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 56351.553718801806,
            "unit": "iter/sec",
            "range": "stddev: 0.000002546580740655483",
            "extra": "mean: 17.74573962929345 usec\nrounds: 11161"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15523.759005721531,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055618132537335665",
            "extra": "mean: 64.41738754327699 usec\nrounds: 1156"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2698.864037598266,
            "unit": "iter/sec",
            "range": "stddev: 0.000023335208534302185",
            "extra": "mean: 370.5262607040796 usec\nrounds: 1051"
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
        "date": 1790345124706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 268.75416634828935,
            "unit": "iter/sec",
            "range": "stddev: 0.0021932509520317927",
            "extra": "mean: 3.7208725490196115 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 40.9976135661858,
            "unit": "iter/sec",
            "range": "stddev: 0.006312161531339958",
            "extra": "mean: 24.391663636363084 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 24.209440713502016,
            "unit": "iter/sec",
            "range": "stddev: 0.005813121939595691",
            "extra": "mean: 41.30619999999765 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 31.712692142447697,
            "unit": "iter/sec",
            "range": "stddev: 0.005766563102321827",
            "extra": "mean: 31.533115999997108 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 241.08933806517166,
            "unit": "iter/sec",
            "range": "stddev: 0.0021898954593453156",
            "extra": "mean: 4.147839999998998 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2806.345642742961,
            "unit": "iter/sec",
            "range": "stddev: 0.000052191731540685425",
            "extra": "mean: 356.335294116724 usec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3211.5380018722553,
            "unit": "iter/sec",
            "range": "stddev: 0.00020672039721527326",
            "extra": "mean: 311.37729007628815 usec\nrounds: 2096"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1546093.5896893078,
            "unit": "iter/sec",
            "range": "stddev: 5.240671322722643e-7",
            "extra": "mean: 646.7913758060099 nsec\nrounds: 74627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 647817.6356985262,
            "unit": "iter/sec",
            "range": "stddev: 6.074269485371022e-7",
            "extra": "mean: 1.5436442987874575 usec\nrounds: 1833"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 387640.23220363737,
            "unit": "iter/sec",
            "range": "stddev: 0.000001436437754450458",
            "extra": "mean: 2.579711590603615 usec\nrounds: 11026"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1294629.6530512185,
            "unit": "iter/sec",
            "range": "stddev: 4.27659290209432e-7",
            "extra": "mean: 772.4216710494563 nsec\nrounds: 3064"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1781313.6772615241,
            "unit": "iter/sec",
            "range": "stddev: 5.49913376878855e-7",
            "extra": "mean: 561.383440078524 nsec\nrounds: 126583"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 26509.47133505025,
            "unit": "iter/sec",
            "range": "stddev: 0.000007283418075052826",
            "extra": "mean: 37.72236674813736 usec\nrounds: 20450"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6337.113598728331,
            "unit": "iter/sec",
            "range": "stddev: 0.00003840611456254292",
            "extra": "mean: 157.8005482181462 usec\nrounds: 4013"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1746349.2801276515,
            "unit": "iter/sec",
            "range": "stddev: 3.295679946429868e-7",
            "extra": "mean: 572.6231352338083 nsec\nrounds: 135136"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 15510.433247825667,
            "unit": "iter/sec",
            "range": "stddev: 0.000017045615327405257",
            "extra": "mean: 64.47273161374684 usec\nrounds: 2094"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1753.5679706541748,
            "unit": "iter/sec",
            "range": "stddev: 0.00011088220821594533",
            "extra": "mean: 570.2658903076032 usec\nrounds: 1331"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2102388.953852033,
            "unit": "iter/sec",
            "range": "stddev: 2.408487957712596e-7",
            "extra": "mean: 475.64937884954514 nsec\nrounds: 99010"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 183315.7589568972,
            "unit": "iter/sec",
            "range": "stddev: 0.000004028778307274655",
            "extra": "mean: 5.455068378682755 usec\nrounds: 9579"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 45022.826382832456,
            "unit": "iter/sec",
            "range": "stddev: 0.00001549212296544411",
            "extra": "mean: 22.210955649406046 usec\nrounds: 11364"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 13832.801588458098,
            "unit": "iter/sec",
            "range": "stddev: 0.00002329220576189889",
            "extra": "mean: 72.29193548430467 usec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2261.4451808331028,
            "unit": "iter/sec",
            "range": "stddev: 0.00023497568898049148",
            "extra": "mean: 442.1951097800239 usec\nrounds: 1002"
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
        "date": 1790350646723,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 292.15730039402524,
            "unit": "iter/sec",
            "range": "stddev: 0.0017946003621808798",
            "extra": "mean: 3.4228136645954934 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.69573821716131,
            "unit": "iter/sec",
            "range": "stddev: 0.001932581152113775",
            "extra": "mean: 20.535678000001667 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 27.311413712905114,
            "unit": "iter/sec",
            "range": "stddev: 0.00233105540980651",
            "extra": "mean: 36.614728571428095 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 36.42051256242692,
            "unit": "iter/sec",
            "range": "stddev: 0.0030878640863928673",
            "extra": "mean: 27.457054545455406 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 267.80658989547175,
            "unit": "iter/sec",
            "range": "stddev: 0.001814128272428436",
            "extra": "mean: 3.7340380622833536 msec\nrounds: 289"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2915.3840914747952,
            "unit": "iter/sec",
            "range": "stddev: 0.00003609103356426114",
            "extra": "mean: 343.00797720760477 usec\nrounds: 702"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3518.809880502219,
            "unit": "iter/sec",
            "range": "stddev: 0.000041061313769652376",
            "extra": "mean: 284.18699331868305 usec\nrounds: 2245"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1767088.155738808,
            "unit": "iter/sec",
            "range": "stddev: 3.925360715048388e-7",
            "extra": "mean: 565.9027235015939 nsec\nrounds: 101011"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 670975.6848062328,
            "unit": "iter/sec",
            "range": "stddev: 9.595298696557216e-7",
            "extra": "mean: 1.4903669725211939 usec\nrounds: 1962"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 573887.1670097474,
            "unit": "iter/sec",
            "range": "stddev: 7.894480942415712e-7",
            "extra": "mean: 1.7425028080180354 usec\nrounds: 21368"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1297857.2555869734,
            "unit": "iter/sec",
            "range": "stddev: 7.046494636032759e-7",
            "extra": "mean: 770.5007586121145 nsec\nrounds: 3295"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1766345.0487315343,
            "unit": "iter/sec",
            "range": "stddev: 9.596398211898241e-7",
            "extra": "mean: 566.1408005860068 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 29320.174455010947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062190340476387455",
            "extra": "mean: 34.106209072337066 usec\nrounds: 20921"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 7021.318571253367,
            "unit": "iter/sec",
            "range": "stddev: 0.000016724196582086355",
            "extra": "mean: 142.42339097020792 usec\nrounds: 4164"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1728562.981381911,
            "unit": "iter/sec",
            "range": "stddev: 3.723030909365756e-7",
            "extra": "mean: 578.5152237846396 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 16383.165901942006,
            "unit": "iter/sec",
            "range": "stddev: 0.000005615812866345093",
            "extra": "mean: 61.03826366559978 usec\nrounds: 2177"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1921.468608674969,
            "unit": "iter/sec",
            "range": "stddev: 0.00009199967625584974",
            "extra": "mean: 520.4352522259486 usec\nrounds: 1685"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2363772.3382495865,
            "unit": "iter/sec",
            "range": "stddev: 1.3136959606529116e-7",
            "extra": "mean: 423.0525858254085 nsec\nrounds: 158731"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 231678.41075866896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013422318118208661",
            "extra": "mean: 4.316327950996107 usec\nrounds: 14368"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 54909.780606973516,
            "unit": "iter/sec",
            "range": "stddev: 0.000004519161624618916",
            "extra": "mean: 18.21169177778504 usec\nrounds: 11615"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15525.604903079899,
            "unit": "iter/sec",
            "range": "stddev: 0.00000613792005262674",
            "extra": "mean: 64.40972871862948 usec\nrounds: 1069"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2741.963001783544,
            "unit": "iter/sec",
            "range": "stddev: 0.000065040948923065",
            "extra": "mean: 364.70222222164836 usec\nrounds: 1080"
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
        "date": 1790574816078,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 549.000573205021,
            "unit": "iter/sec",
            "range": "stddev: 0.0016184723341771685",
            "extra": "mean: 1.8214917229723107 msec\nrounds: 592"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 106.84344111855613,
            "unit": "iter/sec",
            "range": "stddev: 0.0007938124322739643",
            "extra": "mean: 9.359488888890944 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 62.782349694234846,
            "unit": "iter/sec",
            "range": "stddev: 0.0008338207600397422",
            "extra": "mean: 15.928043548389645 msec\nrounds: 62"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 78.23686713888401,
            "unit": "iter/sec",
            "range": "stddev: 0.002069838131352447",
            "extra": "mean: 12.78169789473838 msec\nrounds: 95"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 521.7086995512311,
            "unit": "iter/sec",
            "range": "stddev: 0.0006828370787677839",
            "extra": "mean: 1.9167784644193024 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 5662.133993605424,
            "unit": "iter/sec",
            "range": "stddev: 0.000013254474291642172",
            "extra": "mean: 176.611857142441 usec\nrounds: 1400"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 9272.154550844478,
            "unit": "iter/sec",
            "range": "stddev: 0.00007360049501434393",
            "extra": "mean: 107.84979850329643 usec\nrounds: 3474"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 3538743.7652548086,
            "unit": "iter/sec",
            "range": "stddev: 1.6776845019435352e-7",
            "extra": "mean: 282.58615665211767 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 1156649.7044082973,
            "unit": "iter/sec",
            "range": "stddev: 8.570389079786751e-7",
            "extra": "mean: 864.5659927882539 nsec\nrounds: 3364"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 995925.6347581877,
            "unit": "iter/sec",
            "range": "stddev: 3.221170726479777e-7",
            "extra": "mean: 1.0040910336069433 usec\nrounds: 40161"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 2510885.3404848436,
            "unit": "iter/sec",
            "range": "stddev: 1.1924606806959285e-7",
            "extra": "mean: 398.26589604720994 nsec\nrounds: 8131"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 4707383.087559704,
            "unit": "iter/sec",
            "range": "stddev: 3.27316950336719e-8",
            "extra": "mean: 212.43225405682531 nsec\nrounds: 181819"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 55335.42170159066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017516189234130931",
            "extra": "mean: 18.07160710534992 usec\nrounds: 38168"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 11818.182926903914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043232349525967425",
            "extra": "mean: 84.61537667719757 usec\nrounds: 5814"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 4431769.123337475,
            "unit": "iter/sec",
            "range": "stddev: 3.370940815634168e-8",
            "extra": "mean: 225.64352342585946 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 29224.17883263298,
            "unit": "iter/sec",
            "range": "stddev: 0.000001911677498504587",
            "extra": "mean: 34.21824119428659 usec\nrounds: 4287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 4996.263573560595,
            "unit": "iter/sec",
            "range": "stddev: 0.000042085802539084444",
            "extra": "mean: 200.149568828161 usec\nrounds: 3131"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 4881812.972161541,
            "unit": "iter/sec",
            "range": "stddev: 3.226673524745669e-8",
            "extra": "mean: 204.84193181952745 nsec\nrounds: 200000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 423122.0524461444,
            "unit": "iter/sec",
            "range": "stddev: 4.500405391499771e-7",
            "extra": "mean: 2.363384262812162 usec\nrounds: 13090"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 107361.89139526257,
            "unit": "iter/sec",
            "range": "stddev: 0.000001196858308332136",
            "extra": "mean: 9.314291942924227 usec\nrounds: 22936"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 30255.814964263005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027549944968873977",
            "extra": "mean: 33.051497742868975 usec\nrounds: 2437"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 5478.226982954664,
            "unit": "iter/sec",
            "range": "stddev: 0.000005171273533947229",
            "extra": "mean: 182.54081167346106 usec\nrounds: 2193"
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
        "date": 1790580643852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 277.7552765241736,
            "unit": "iter/sec",
            "range": "stddev: 0.0019580923316219285",
            "extra": "mean: 3.6002916398708558 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 46.272289868137214,
            "unit": "iter/sec",
            "range": "stddev: 0.0023973568165155824",
            "extra": "mean: 21.611206249997867 msec\nrounds: 48"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 26.965212660665706,
            "unit": "iter/sec",
            "range": "stddev: 0.002639812541191252",
            "extra": "mean: 37.084817857146184 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 37.48591659625746,
            "unit": "iter/sec",
            "range": "stddev: 0.00253482285809369",
            "extra": "mean: 26.67668529412026 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 251.58146411568057,
            "unit": "iter/sec",
            "range": "stddev: 0.0017921795918782986",
            "extra": "mean: 3.974855633800535 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2973.8765110403783,
            "unit": "iter/sec",
            "range": "stddev: 0.00002328754021944319",
            "extra": "mean: 336.2614406776968 usec\nrounds: 708"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3552.2397137939897,
            "unit": "iter/sec",
            "range": "stddev: 0.00003958957476463177",
            "extra": "mean: 281.51253309758886 usec\nrounds: 2266"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1771222.0258051385,
            "unit": "iter/sec",
            "range": "stddev: 4.5517458000302206e-7",
            "extra": "mean: 564.5819583490293 nsec\nrounds: 113637"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 643395.1865704769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012536816188483064",
            "extra": "mean: 1.5542547113700873 usec\nrounds: 1751"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 567809.1007201384,
            "unit": "iter/sec",
            "range": "stddev: 8.534052045128921e-7",
            "extra": "mean: 1.761155287457923 usec\nrounds: 21882"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1283756.9803383376,
            "unit": "iter/sec",
            "range": "stddev: 4.417867476324812e-7",
            "extra": "mean: 778.9636319924409 nsec\nrounds: 4207"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1758260.086442212,
            "unit": "iter/sec",
            "range": "stddev: 4.374949366834825e-7",
            "extra": "mean: 568.744071318522 nsec\nrounds: 161291"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 27497.886145251374,
            "unit": "iter/sec",
            "range": "stddev: 0.000006869685763603183",
            "extra": "mean: 36.366431758344106 usec\nrounds: 19724"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6570.341633787469,
            "unit": "iter/sec",
            "range": "stddev: 0.000017840193062789",
            "extra": "mean: 152.19908731344776 usec\nrounds: 3287"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1730765.532805856,
            "unit": "iter/sec",
            "range": "stddev: 4.690338411188369e-7",
            "extra": "mean: 577.7790122610284 nsec\nrounds: 99010"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 15921.854566492635,
            "unit": "iter/sec",
            "range": "stddev: 0.000008324174239596904",
            "extra": "mean: 62.80675381274295 usec\nrounds: 2295"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1868.6599038975173,
            "unit": "iter/sec",
            "range": "stddev: 0.0003296296866530803",
            "extra": "mean: 535.1428571428495 usec\nrounds: 1505"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2326119.726789347,
            "unit": "iter/sec",
            "range": "stddev: 1.4104353526787582e-7",
            "extra": "mean: 429.9004855520495 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 227977.44212217396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011805418463951787",
            "extra": "mean: 4.386398894080478 usec\nrounds: 13021"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 56821.640324837885,
            "unit": "iter/sec",
            "range": "stddev: 0.000003847251332090827",
            "extra": "mean: 17.598928758184403 usec\nrounds: 11482"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15343.632832415025,
            "unit": "iter/sec",
            "range": "stddev: 0.000006103290487657308",
            "extra": "mean: 65.17361376683856 usec\nrounds: 1046"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2805.19367773493,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547256047687038",
            "extra": "mean: 356.48162475806515 usec\nrounds: 1034"
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
        "date": 1790586411902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 284.2927451181662,
            "unit": "iter/sec",
            "range": "stddev: 0.001647712736125711",
            "extra": "mean: 3.5175009463725515 msec\nrounds: 317"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 46.39018249503443,
            "unit": "iter/sec",
            "range": "stddev: 0.002334536035740197",
            "extra": "mean: 21.556285106380844 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 26.51017156008532,
            "unit": "iter/sec",
            "range": "stddev: 0.0025614960350457926",
            "extra": "mean: 37.721370370368945 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 35.89723340022204,
            "unit": "iter/sec",
            "range": "stddev: 0.002970665405382119",
            "extra": "mean: 27.857299999999846 msec\nrounds: 42"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 259.22535880004205,
            "unit": "iter/sec",
            "range": "stddev: 0.0018537032509279446",
            "extra": "mean: 3.8576472789121192 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2914.3868640376736,
            "unit": "iter/sec",
            "range": "stddev: 0.00002512229447496431",
            "extra": "mean: 343.12534562229393 usec\nrounds: 651"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3407.763002121488,
            "unit": "iter/sec",
            "range": "stddev: 0.0002069526854215391",
            "extra": "mean: 293.44763687423523 usec\nrounds: 2137"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1721076.3386774429,
            "unit": "iter/sec",
            "range": "stddev: 5.593023292523056e-7",
            "extra": "mean: 581.0317517748501 nsec\nrounds: 111112"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 670707.0706289655,
            "unit": "iter/sec",
            "range": "stddev: 2.7458605764579006e-7",
            "extra": "mean: 1.4909638555953126 usec\nrounds: 1660"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 569050.0475191252,
            "unit": "iter/sec",
            "range": "stddev: 9.908033302944887e-7",
            "extra": "mean: 1.7573146762041016 usec\nrounds: 21368"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1316086.9853358422,
            "unit": "iter/sec",
            "range": "stddev: 3.5955237225514654e-7",
            "extra": "mean: 759.8281961163971 nsec\nrounds: 3958"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1741888.887132353,
            "unit": "iter/sec",
            "range": "stddev: 3.673597548256855e-7",
            "extra": "mean: 574.0894309546263 nsec\nrounds: 140846"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 28385.029088956817,
            "unit": "iter/sec",
            "range": "stddev: 0.00000552534071698924",
            "extra": "mean: 35.22983883039421 usec\nrounds: 20041"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6807.398393755364,
            "unit": "iter/sec",
            "range": "stddev: 0.000018129597491087106",
            "extra": "mean: 146.89899755497353 usec\nrounds: 4090"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1763257.1919527277,
            "unit": "iter/sec",
            "range": "stddev: 4.059647520752092e-7",
            "extra": "mean: 567.1322394508683 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 16056.064066494633,
            "unit": "iter/sec",
            "range": "stddev: 0.000005522174620103012",
            "extra": "mean: 62.28176443856955 usec\nrounds: 2199"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1902.682628353466,
            "unit": "iter/sec",
            "range": "stddev: 0.00008326953176428997",
            "extra": "mean: 525.5737268518476 usec\nrounds: 1728"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2355486.41780709,
            "unit": "iter/sec",
            "range": "stddev: 1.474671959183909e-7",
            "extra": "mean: 424.5407625528268 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 229855.81572060063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013930315221904944",
            "extra": "mean: 4.35055339741998 usec\nrounds: 13643"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 52895.800623668874,
            "unit": "iter/sec",
            "range": "stddev: 0.000005158720533350877",
            "extra": "mean: 18.905092430958266 usec\nrounds: 11468"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15728.988616878198,
            "unit": "iter/sec",
            "range": "stddev: 0.000006825345942767132",
            "extra": "mean: 63.57687861296669 usec\nrounds: 1038"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2708.373139614433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007184939298913753",
            "extra": "mean: 369.22534246605363 usec\nrounds: 1022"
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
        "date": 1790616966626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 302.64400719712035,
            "unit": "iter/sec",
            "range": "stddev: 0.0012731308487527561",
            "extra": "mean: 3.3042121311481067 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.345084157346534,
            "unit": "iter/sec",
            "range": "stddev: 0.002171278365601428",
            "extra": "mean: 20.684626315787263 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 27.314917290914263,
            "unit": "iter/sec",
            "range": "stddev: 0.0026906844767401092",
            "extra": "mean: 36.61003214286244 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 37.132574257158325,
            "unit": "iter/sec",
            "range": "stddev: 0.0029538212979713045",
            "extra": "mean: 26.930532558141252 msec\nrounds: 43"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 273.19193003743976,
            "unit": "iter/sec",
            "range": "stddev: 0.0013125614062017784",
            "extra": "mean: 3.660430232558313 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 2720.4724182771197,
            "unit": "iter/sec",
            "range": "stddev: 0.00005627238726027644",
            "extra": "mean: 367.583215797976 usec\nrounds: 709"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3501.3383505796305,
            "unit": "iter/sec",
            "range": "stddev: 0.00014194842719463218",
            "extra": "mean: 285.6050743666217 usec\nrounds: 2286"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1645673.9389389534,
            "unit": "iter/sec",
            "range": "stddev: 4.189571716824234e-7",
            "extra": "mean: 607.653786293018 nsec\nrounds: 102041"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 620696.2817396185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014764178770828922",
            "extra": "mean: 1.6110939108533262 usec\nrounds: 1938"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 545571.2451637978,
            "unit": "iter/sec",
            "range": "stddev: 6.897024576961091e-7",
            "extra": "mean: 1.8329411765456376 usec\nrounds: 25840"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1223577.359396797,
            "unit": "iter/sec",
            "range": "stddev: 3.828007120941906e-7",
            "extra": "mean: 817.2756649346497 nsec\nrounds: 4023"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1636639.2455505512,
            "unit": "iter/sec",
            "range": "stddev: 4.083339451563903e-7",
            "extra": "mean: 611.0082003218789 nsec\nrounds: 181819"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 27481.549107706316,
            "unit": "iter/sec",
            "range": "stddev: 0.000008980669434851738",
            "extra": "mean: 36.38805061828127 usec\nrounds: 20704"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 6531.369172297205,
            "unit": "iter/sec",
            "range": "stddev: 0.000026038874839998462",
            "extra": "mean: 153.10725417903168 usec\nrounds: 3529"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1659120.8836767108,
            "unit": "iter/sec",
            "range": "stddev: 4.82591410628438e-7",
            "extra": "mean: 602.7288366016709 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 14579.2226701596,
            "unit": "iter/sec",
            "range": "stddev: 0.000015503556755854514",
            "extra": "mean: 68.59076252719397 usec\nrounds: 2295"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1952.3880310461561,
            "unit": "iter/sec",
            "range": "stddev: 0.00007372704524818643",
            "extra": "mean: 512.19326491372 usec\nrounds: 1559"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2032603.8781295363,
            "unit": "iter/sec",
            "range": "stddev: 1.4136029087942802e-7",
            "extra": "mean: 491.97977567558365 nsec\nrounds: 161291"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 226312.00252199612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011014734954666036",
            "extra": "mean: 4.418678589098721 usec\nrounds: 12078"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 56643.39457401769,
            "unit": "iter/sec",
            "range": "stddev: 0.000002686956984130481",
            "extra": "mean: 17.654309165621576 usec\nrounds: 13158"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 14814.218125192443,
            "unit": "iter/sec",
            "range": "stddev: 0.000006365081406462543",
            "extra": "mean: 67.50271877659488 usec\nrounds: 1177"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2630.0559048755294,
            "unit": "iter/sec",
            "range": "stddev: 0.000019612403876315588",
            "extra": "mean: 380.22005469398044 usec\nrounds: 1097"
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
        "date": 1790644814097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 410.8645277376996,
            "unit": "iter/sec",
            "range": "stddev: 0.0013648854807617977",
            "extra": "mean: 2.4338922746779708 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 82.0718753714487,
            "unit": "iter/sec",
            "range": "stddev: 0.00200737009073912",
            "extra": "mean: 12.184441935487703 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 45.13801049293393,
            "unit": "iter/sec",
            "range": "stddev: 0.0027205895651138306",
            "extra": "mean: 22.154277272733225 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 51.160549944892324,
            "unit": "iter/sec",
            "range": "stddev: 0.015852337434561128",
            "extra": "mean: 19.546310606065646 msec\nrounds: 66"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 341.4987541110025,
            "unit": "iter/sec",
            "range": "stddev: 0.001998900691737794",
            "extra": "mean: 2.928268369831168 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3696.518120855437,
            "unit": "iter/sec",
            "range": "stddev: 0.00027727409670497204",
            "extra": "mean: 270.5248472496553 usec\nrounds: 982"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 6832.590804416532,
            "unit": "iter/sec",
            "range": "stddev: 0.00018020810535867302",
            "extra": "mean: 146.35736701129653 usec\nrounds: 2613"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 2731164.1441829153,
            "unit": "iter/sec",
            "range": "stddev: 6.396339713015605e-7",
            "extra": "mean: 366.14423271845163 nsec\nrounds: 136987"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 1051786.0919139541,
            "unit": "iter/sec",
            "range": "stddev: 4.897988505531744e-7",
            "extra": "mean: 950.7636654334171 nsec\nrounds: 2488"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 864118.1622063094,
            "unit": "iter/sec",
            "range": "stddev: 4.4698451583716566e-7",
            "extra": "mean: 1.1572491399171039 usec\nrounds: 21506"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 2071660.4897955903,
            "unit": "iter/sec",
            "range": "stddev: 3.649038807516489e-7",
            "extra": "mean: 482.7045767999704 nsec\nrounds: 7210"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 3721472.6436826154,
            "unit": "iter/sec",
            "range": "stddev: 9.123417738670634e-8",
            "extra": "mean: 268.71082921905906 nsec\nrounds: 151516"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 38995.95298114754,
            "unit": "iter/sec",
            "range": "stddev: 0.000005022067224926102",
            "extra": "mean: 25.643686679062483 usec\nrounds: 27933"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 9623.052129184842,
            "unit": "iter/sec",
            "range": "stddev: 0.000012295061712150428",
            "extra": "mean: 103.91713424966233 usec\nrounds: 5311"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 2633563.93171005,
            "unit": "iter/sec",
            "range": "stddev: 3.4977284913044715e-7",
            "extra": "mean: 379.71358430272505 nsec\nrounds: 147059"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 21754.613143208717,
            "unit": "iter/sec",
            "range": "stddev: 0.000006033876819603451",
            "extra": "mean: 45.96726190519167 usec\nrounds: 3696"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 3479.829659625685,
            "unit": "iter/sec",
            "range": "stddev: 0.00014570591130628633",
            "extra": "mean: 287.3703881550245 usec\nrounds: 2499"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 3537601.997124878,
            "unit": "iter/sec",
            "range": "stddev: 9.702976035217583e-8",
            "extra": "mean: 282.6773619002476 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 319922.2488218702,
            "unit": "iter/sec",
            "range": "stddev: 8.245226090118061e-7",
            "extra": "mean: 3.125759473380018 usec\nrounds: 12772"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 82211.95540439092,
            "unit": "iter/sec",
            "range": "stddev: 0.000002499853379420603",
            "extra": "mean: 12.163681000909394 usec\nrounds: 12627"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 22580.96632174137,
            "unit": "iter/sec",
            "range": "stddev: 0.00000909076567205113",
            "extra": "mean: 44.28508442693091 usec\nrounds: 2132"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 4050.5850613901903,
            "unit": "iter/sec",
            "range": "stddev: 0.00003869265588178954",
            "extra": "mean: 246.87791636124606 usec\nrounds: 1363"
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
        "date": 1790647528096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_parsing",
            "value": 296.1045878187732,
            "unit": "iter/sec",
            "range": "stddev: 0.0014075520081791605",
            "extra": "mean: 3.377185093167271 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_parsing",
            "value": 48.65806034671817,
            "unit": "iter/sec",
            "range": "stddev: 0.0017629420910070738",
            "extra": "mean: 20.55157959183728 msec\nrounds: 49"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_pot_parsing",
            "value": 27.365757520815563,
            "unit": "iter/sec",
            "range": "stddev: 0.0025073809582272133",
            "extra": "mean: 36.54201785714711 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_po_to_mo_compilation",
            "value": 36.91143789490774,
            "unit": "iter/sec",
            "range": "stddev: 0.003403768893272944",
            "extra": "mean: 27.091873333332234 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_catalog_build",
            "value": 268.57185694284203,
            "unit": "iter/sec",
            "range": "stddev: 0.0014309272326115774",
            "extra": "mean: 3.7233983164990434 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_parsing_performance.py::test_mo_catalog_lookup",
            "value": 3001.832480400087,
            "unit": "iter/sec",
            "range": "stddev: 0.000012412268561406318",
            "extra": "mean: 333.1298486938615 usec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_transx_init",
            "value": 3434.9332560063,
            "unit": "iter/sec",
            "range": "stddev: 0.00017295038544874421",
            "extra": "mean: 291.1264718903656 usec\nrounds: 2259"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_lookup",
            "value": 1803758.9970175084,
            "unit": "iter/sec",
            "range": "stddev: 4.3156879110522214e-7",
            "extra": "mean: 554.3977890912737 nsec\nrounds: 106383"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_params",
            "value": 664242.6690617938,
            "unit": "iter/sec",
            "range": "stddev: 7.655093105891349e-7",
            "extra": "mean: 1.5054738976832742 usec\nrounds: 1973"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_multiple_params",
            "value": 561597.9642360525,
            "unit": "iter/sec",
            "range": "stddev: 8.118098629449976e-7",
            "extra": "mean: 1.7806332353079488 usec\nrounds: 21098"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_switch_locale",
            "value": 1335750.7828798606,
            "unit": "iter/sec",
            "range": "stddev: 5.38115818232728e-7",
            "extra": "mean: 748.6426456318547 nsec\nrounds: 4052"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_fallback",
            "value": 1831922.8944796354,
            "unit": "iter/sec",
            "range": "stddev: 3.3519603509327776e-7",
            "extra": "mean: 545.8745032410623 nsec\nrounds: 144928"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch",
            "value": 29360.98317075438,
            "unit": "iter/sec",
            "range": "stddev: 0.000004213421553022932",
            "extra": "mean: 34.05880498566107 usec\nrounds: 20619"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_batch_with_params",
            "value": 5031.01972286893,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719037622040752",
            "extra": "mean: 198.76686140871493 usec\nrounds: 3081"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_long_text",
            "value": 1799914.986509258,
            "unit": "iter/sec",
            "range": "stddev: 3.563524017828033e-7",
            "extra": "mean: 555.5817955265725 nsec\nrounds: 138889"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_mixed_load",
            "value": 16356.373582055223,
            "unit": "iter/sec",
            "range": "stddev: 0.000006311607424640689",
            "extra": "mean: 61.138246505760435 usec\nrounds: 2361"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_po_file_loading",
            "value": 1944.1419515585706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007008314603527346",
            "extra": "mean: 514.3657330157013 usec\nrounds: 1678"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_cache_performance",
            "value": 2255244.0061072,
            "unit": "iter/sec",
            "range": "stddev: 1.1751560397387761e-7",
            "extra": "mean: 443.41100000355027 nsec\nrounds: 100000"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_nested_params",
            "value": 223844.31247542452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013596305035754673",
            "extra": "mean: 4.467390700890773 usec\nrounds: 14410"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_with_large_params",
            "value": 55724.6726206589,
            "unit": "iter/sec",
            "range": "stddev: 0.000002830034747634685",
            "extra": "mean: 17.945372363287216 usec\nrounds: 11615"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_concurrent_locale_switch",
            "value": 15699.958808406847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059827614828916525",
            "extra": "mean: 63.69443462899601 usec\nrounds: 1132"
          },
          {
            "name": "tests/benchmarks/test_performance.py::test_translation_memory_usage",
            "value": 2731.8257702227397,
            "unit": "iter/sec",
            "range": "stddev: 0.000047050492111124344",
            "extra": "mean: 366.0555555556037 usec\nrounds: 1071"
          }
        ]
      }
    ]
  }
}