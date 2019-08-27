<?php
namespace core;
use Throwable;

class View {
    function generate_page($content_view, $template_view, $data = []) {
        global $twig;
        $content_view .= ".twig";
        $template_view .= ".twig";
        try {
            $template = $twig->load($content_view);
            if($template_view != "none") {
                $data["template"] = "templates/" . $template_view;
            }
            echo $template->render($data);
        }
        catch (Throwable $e) {
            echo "Ошибка: " . $e->getMessage();
        }
    }
    function generate_block($content_view, $block, $data = []) {
        global $twig;
        $content_view .= ".twig";
        try {
            $template = $twig->load($content_view);
            echo $template->renderBlock($block, $data);
        }
        catch (Throwable $e) {
            echo "Ошибка: " . $e->getMessage();
        }
    }
    function generate_json($data) {
        $json = json_encode($data);
        echo $json;
    }
}