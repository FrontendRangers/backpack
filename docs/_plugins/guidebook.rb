module Jekyll
  class ExampleBlock < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
    end
    def render(context)
      '<div class="sg-example-snippet">' + super + '</div>'
    end
  end
end

Liquid::Template.register_tag('example', Jekyll::ExampleBlock)

module Jekyll
  class ExampleCodeBlock < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
    end
    def render(context)
      '<div class="sg-example-code">' + super + '</div>'
    end
  end
end

Liquid::Template.register_tag('exampleCode', Jekyll::ExampleCodeBlock)