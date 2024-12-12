window.BENCHMARK_DATA = {
  "lastUpdate": 1734017743949,
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
      }
    ]
  }
}